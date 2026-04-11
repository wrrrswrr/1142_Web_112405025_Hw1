"use client";

import { motion } from "motion/react";
import { Heart, Star } from "lucide-react";

export default function About() {
  const stats = [
    { label: "死線戰士 Deadline Survivor", value: 70, color: "#FF9149" },
    { label: "爆肝進度 Liver HP Warning", value: 80, color: "#AFDDFF" },
    { label: "挖坑能力 Side-Project Spawner", value: 90, color: "#ffcc9f" },
    { label: "Ctrl+Z頻率 Undo Spamming", value: 100, color: "#60B5FF" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* 頁面動畫 */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="retro-window bg-white overflow-hidden">
        {/* 視窗頂部 */}
        <div className="retro-header border-b-4 border-black">
          <div className="flex gap-2">
              <div className="w-4 h-4 bg-white border-2 border-black"></div>
              <span>CHRACTER_STATUS.sys</span>
            </div>
        </div>
        {/* 資訊區域 */}
        <div className="p-4 md:p-8 flex flex-col lg:flex-row gap-8 relative">
          {/* 左側*/}
          <div className="w-full lg:w-72 flex flex-col items-center gap-6">
          {/* 頭像區域 */}
          <div className="retro-window w-48 h-48 md:w-64 md:h-64 relative overflow-hidden">
            <img src="/profile.jpg" alt="profile" className="w-full h-full object-cover"/>
            <div className="absolute bottom-2 right-2 bg-[#FF9149] border-2 border-black px-2 py-1 text-[10px] text-black">LV.21</div>
          </div>
            {/* 基本資訊 */}
            <div className="retro-window p-4 w-full text-center" style={{ backgroundColor: '#FFECDB' }} >
              <h2 className="text-sm md:text-base font-bold mb-2">林品妤 PIN YU LIN</h2>
              <p className="text-[10px] text-gray-500">廣電三 & 數位內容</p>
            </div>
          </div>

          {/* 右側 */}
          <div className="flex-1 flex flex-col gap-6">
            {/* 屬性區域 */}
            <div className="retro-window p-6 md:p-8" style={{ backgroundColor: '#FFECDB' }}>
              {/* 標題 */}
              <h3 className="text-xs md:text-sm font-bold mb-4 flex items-center gap-2">
                <Star size={16} className="text-yellow-500" />
                屬性值 ATTRIBUTES
              </h3>
              {/* 屬性條 */}
              <div className="flex flex-col gap-5">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    {/* 屬性標籤與數值 */}
                    <div className="flex justify-between text-[10px] md:text-xs">
                      <span>{stat.label}</span>
                      <span>{stat.value}/100</span>
                    </div>
                    <div className="w-full h-4 bg-white border-2 border-black p-[2px]">
                      {/* 屬性條出場動畫 */}
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${stat.value}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full"
                        style={{ backgroundColor: stat.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 個人簡介區塊 */}
            <div className="retro-window p-6 md:p-8" style={{ backgroundColor: '#FFECDB' }}>
              <h3 className="text-xs md:text-sm font-bold mb-3 flex items-center gap-2">
                <Heart size={16} className="text-red-500" />
                個人簡介 BIO
              </h3>
              <p className="text-[10px] md:text-xs leading-loose text-gray-700">
                一個超級大 I 人，MBTI測出來有90% I 的程度。手速極慢，皮克敏搶菇都搶不到。 
              </p>
            </div>
          </div>
          {/* 左下角裝飾與對話氣泡 */}
          <div className="mt-12 lg:mt-0 lg:absolute lg:bottom-4 lg:left-2 flex items-center gap-2 z-20 pointer-events-none self-start">
            {/* 左下角裝飾 */}
            <div className="w-25 h-25">
              <img 
                src="cat.gif" 
                alt="cat" 
                className="w-full h-full object-contain"/>
            </div>
            {/* 對話氣泡 */}
            <motion.div 
              initial={{ opacity: 0, x: -10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="bg-white border-2 border-black px-2 py-1 relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-[10px] text-black whitespace-nowrap animate-pulse">I put the 'Pro' in procrastinate</p>
              {/* 氣泡小尾巴 */}
              <div className="absolute top-1/2 -left-[5px] -translate-y-1/2 w-2 h-2 bg-white border-l-2 border-b-2 border-black rotate-45"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
