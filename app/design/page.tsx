"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";

export default function Design() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  const projects = [
    { 
      title: "手機APP《插座神偷》", 
      category: "UI", 
      footercolor: "#FF9149", 
      image: "/socketthief.jpg", 
      link: "https://excellent-environment-840225.framer.app/#hero",
      description: "這是一款能隨時隨地偷電的APP，幫助你找到最近的插座。"
    },
    { 
      title: "AE動畫《Not This Way!》", 
      category: "AE/AI", 
      footercolor: "#AFDDFF", 
      image: "/notthisway.jpg", 
      link: "https://youtu.be/18ydl3TrEJI",
      description: "使用 After Effects 與 Illustrator 製作的動態影像作品，關於一個政大學生搭到反方向捷運的故事。"
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* 頁面動畫 */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="retro-window p-4 md:p-8 bg-white">
        {/* 大標題 */}
        <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-2">
          <h2 className="text-lg md:text-xl font-bold text-black">設計專案 DESIGN</h2>
          <div className="text-[8px] bg-black text-white px-2 py-1">ARCHIVE</div>
        </div>       
        <p className="text-[10px] text-gray-600 mb-8 font-mono tracking-widest">SYSTEM OUTPUT: VISUALS</p>
        {/* 作品區域 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="retro-window overflow-hidden group cursor-pointer">
              {/* 小標題列 */}
              <div className="retro-header border-b-4 border-black">
                <span>{project.category}</span>
                <div className="w-3 h-3 bg-white border-2 border-black"></div>
              </div>
              {/* 作品圖片 */}
              <div className="h-48 relative overflow-hidden border-b-4 border-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
                {/* 懸停時的半透明遮罩 */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity flex items-center justify-center">
                </div>
              </div>
              {/* 作品底部資訊區 */}
              <div className="p-4 border-t-4 border-black" style={{ backgroundColor: project.footercolor }}> 
                <h3 className="font-bold text-xs text-black">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
       {/* 底部裝飾訊息 */}
       <div className="mt-8 retro-window p-4 bg-[#222] text-black text-center" style={{ backgroundColor: '#FFECDB' }}>
          <p className="text-[8px] animate-pulse">--- 更多專案待產出 ---</p>
        </div>
      </motion.div>

      {/* 作品詳情彈窗 */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* 背景遮罩 */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* 彈窗主體 */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="retro-window w-full max-w-lg bg-white overflow-hidden relative z-10"
            >
              {/* 彈窗標題列 */}
              <div className="retro-header border-b-4 border-black p-2 flex justify-between items-center bg-black text-white">
                <span className="text-[10px] tracking-widest">PROJECT_DETAILS.exe</span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#FF9149] border-2 border-black w-6 h-6 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-4">
                {/* 圖片預覽 */}
                <div className="retro-window overflow-hidden border-2 border-black h-48 md:h-64">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>

                {/* 文字資訊 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] bg-black text-white px-2 py-0.5">{selectedProject.category}</span>
                    <h3 className="font-bold text-sm text-black">{selectedProject.title}</h3>
                  </div>
                  <p className="text-[10px] leading-relaxed text-gray-700 font-mono">
                    {selectedProject.description}
                  </p>
                </div>

                {/* 操作按鈕 */}
                <div className="flex gap-3 mt-2">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="retro-button flex-1 bg-[#AFDDFF] hover:bg-white text-black flex items-center justify-center gap-2 text-[10px] font-bold"
                  >
                    <ExternalLink size={14} />
                    VIEW SOURCE
                  </a>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="retro-button flex-1 bg-[#eee] hover:bg-white text-black text-[10px] font-bold"
                  >
                    CLOSE
                  </button>
                </div>
              </div>

              {/* 底部裝飾條 */}
              <div className="h-2 bg-black w-full" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
