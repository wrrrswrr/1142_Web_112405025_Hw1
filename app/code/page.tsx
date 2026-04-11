"use client";

import { motion } from "motion/react";
import { FaTerminal } from "react-icons/fa6";

export default function Code() {
  const projects = [
    { 
      name: "政大生的一學期_THIS_SEMESTER_IN_NCCU",  
      desc: "這是某期末作業做出來的文字遊戲，此為使用gemini美化過後的版本",
      tags: ["遊戲", "生活模擬", "文字冒險"]
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* 頁面動畫 */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="retro-window bg-white overflow-hidden">
        {/* 視窗頂部 */}
        <div className="bg-[#222] p-2 flex justify-between items-center border-b-2 border-black">
          <div className="flex items-center gap-2 ">
            <FaTerminal size={14} className="text-white" />
            <span className="text-[8px] text-[#ffffff]">root@pin-yu: ~/projects</span>
          </div>
          {/* 視窗右上 */}
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
          </div>
        </div>
        {/* 大標題區域 */}
        <div className="p-4 md:p-8">
          <div className="mb-8">
            <p className="text-[10px] mb-2 text-black/50">{">"} system.init()</p>
            <p className="text-[10px] mb-2 text-black/50">{">"} loading_projects... [OK]</p>
            <h2 className="text-lg md:text-xl font-bold text-[#000000] mt-4 flex items-center gap-3">
              程式專案 PROJECTS_LIST
            </h2>
          </div>
          {/* 專案列表 */}
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                whileHover={{ backgroundColor: "rgba(200, 50, 20, 0.05)" }} 
                className="border border-[#ffd8a8]/70 p-4 md:p-6 relative group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* 專案名稱 */}
                    <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                      <span className="text-black/30">#</span> {project.name}
                    </h3>
                    {/* 專案描述 */}
                    <p className="text-[10px] text-black/70 mb-4 leading-relaxed">
                      {project.desc}
                    </p>
                    {/* 專案標籤 */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[8px] border border-[#ffd8a8]/80 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* 右側按鈕 */}
                  <div className="flex items-center gap-4">
                    <a href="https://gemini.google.com/share/26e2ff4cff64" target="_blank" rel="noopener noreferrer" className="retro-button text-black text-[8px] px-4 py-2 font-bold bg-[#ffcc9f] hover:bg-[#FF9149]">
                      VIEW_SOURCE
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* 底部裝飾訊息 */}
          <div className="mt-12 flex items-center gap-2">
            <span className="animate-pulse">_</span>
            <span className="text-[8px] animate-pulse">等待指令... WAITING FOR COMMAND...</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
