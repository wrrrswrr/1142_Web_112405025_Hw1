"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// 選單內容
const MenuContent = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "首頁 HOME", color: "bg-[#FFECDB]" },
    { href: "/about", label: "關於我 ABOUT", color: "bg-[#ffcc9f]" },
    { href: "/hobby", label: "我的興趣 HOBBY", color: "bg-[#FFECDB]" },
    { href: "/photography", label: "攝影作品 PHOTO", color: "bg-[#ffcc9f]" },
    { href: "/design", label: "設計作品 DESIGN", color: "bg-[#FFECDB]" },
    { href: "/code", label: "程式專案 CODE", color: "bg-[#ffcc9f]" },
  ];

  return (
    <div className="flex flex-col w-full h-full p-4 md:p-6 bg-white gap-4 md:gap-6 overflow-y-auto">
      {/* 個人資訊區塊 */}
      <div className="flex flex-row md:flex-col items-center justify-center md:justify-start gap-4">
        <div className="retro-window w-[100px] h-[100px]">
          <div className="w-full h-full relative">
            <img src="me.jpg" alt="me" className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-sm font-bold mb-1 text-black">林品妤</h1>
          <p className="text-[8px] text-gray-600">廣電三 & 數位內容</p>
        </div>
      </div>

      {/* 社群按鈕 */}
      <div className="flex justify-center gap-2">
        <a href="https://www.instagram.com/pinyu_nov.30/" target="_blank" rel="noopener noreferrer" className="retro-button p-2 bg-[#AFDDFF] hover:bg-white text-black">
          <FaInstagram size={14} />
        </a>
        <a href="https://github.com/wrrrswrr" target="_blank" rel="noopener noreferrer" className="retro-button p-2 bg-[#FF9149] hover:bg-white text-black">
          <FaGithub size={14} />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=112405025@g.nccu.edu.tw" target="_blank" rel="noopener noreferrer" className="retro-button p-2 bg-[#60B5FF] hover:bg-white text-black">
          <FaEnvelope size={14} />
        </a>
      </div>

      {/* 導覽選單 */}
      <nav className="flex flex-col gap-2 border-t-2 md:border-t-0 border-black/10 pt-4 md:pt-0">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="w-full">
            <div className={`retro-button w-full text-[10px] text-black ${pathname === link.href ? 'bg-[#FF9149]' : link.color} hover:bg-[#FF9149]`}>
              {link.label}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

// 電腦版側邊欄
export function DesktopSidebar() {
  return (
    <div className="hidden md:flex flex-col w-[260px] h-full border-r-4 border-black bg-white z-10 shrink-0">
      <MenuContent />
    </div>
  );
}

// 手機版選單
export function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* 手機版觸發按鈕 */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-6 h-6 bg-white border-2 border-black flex items-center justify-center hover:bg-[#FF9149] transition-colors"
        aria-label="切換選單"
      >
        {isOpen ? (
          <X size={14} className="text-black" />
        ) : (
          <MenuIcon size={14} className="text-black" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/40 z-100"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 left-0 w-[260px] h-full bg-white border-r-4 border-black z-110 shadow-2xl flex flex-col"
            >
              <div className="h-[44px] bg-black border-b-4 border-black shrink-0 flex items-center px-4">
                <span className="text-white text-[10px] tracking-widest">MENU</span>
              </div>
              <MenuContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
