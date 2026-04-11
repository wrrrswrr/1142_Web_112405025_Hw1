"use client";

import { motion } from "motion/react";
import { Book, Music, Languages, Palette, MonitorPlay, Dog } from "lucide-react";

export default function Hobby() {
  const hobbies = [
    { name: "看書 BOOK", icon: <Book size={24} />, color: "#FF9149", desc: "喜歡日本推理小說", level: "LV.75" },
    { name: "音樂 MUSIC", icon: <Music size={24} />, color: "#60B5FF", desc: "會聽各種流行音樂", level: "LV.80" },
    { name: "語言 LANGUAGE", icon: <Languages size={24} />, color: "#AFDDFF", desc: "正努力學習韓文以及日文平假片假名", level: "LV.50" },
    { name: "繪圖 DRAW", icon: <Palette size={24} />, color: "#AFDDFF", desc: "緩慢增進Procreate板繪能力中", level: "LV.60" },
    { name: "追劇 DRAMA", icon: <MonitorPlay size={24} />, color: "#FF9149", desc: "喜歡看各國懸疑劇、單元劇", level: "LV.90" },
    { name: "狗勾 DOGS", icon: <Dog size={24} />, color: "#60B5FF", desc: "家裡有養柴犬", level: "LV.MAX" },
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
          <h2 className="text-lg md:text-xl font-bold">我的興趣 HOBBY</h2>
          <div className="text-[8px] bg-black text-white px-2 py-1">COLLECTION</div>
        </div>
        <p className="text-[10px] text-gray-600 mb-8 font-mono tracking-widest">LOADING CHRACTER BACKGROUND...</p>
        {/* 興趣卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hobbies.map((hobby, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="retro-window p-4 flex flex-col gap-4"
              style={{ backgroundColor: hobby.color }}>
              {/* 圖示與等級 */}
              <div className="flex justify-between items-start">
                <div className="retro-window p-2" style={{ backgroundColor: 'white' }}>
                  {hobby.icon}
                </div>
                <span className="text-[8px] font-bold bg-white px-1 border-2 border-black">{hobby.level}</span>
              </div>
              <div>
                <h3 className="font-bold text-[10px] mb-1">{hobby.name}</h3>
                <p className="text-[8px] leading-relaxed opacity-80">{hobby.desc}</p>
              </div>
              {/* 底部進度條區域 */}
              <div className="mt-auto pt-2 border-t-2 border-black/10 flex gap-1">
                <div className="w-full h-2 bg-white border-2 border-black overflow-hidden">              
                  {/* 根據等級計算進度條長度 */}
                  <div className="h-full bg-black" style={{ width: hobby.level === 'LV.MAX' ? '100%' : `${hobby.level.split('.')[1]}%` }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>       
        {/* 底部裝飾訊息 */}
        <div className="mt-8 retro-window p-4 bg-[#222] text-black text-center" style={{ backgroundColor: '#FFECDB' }}>
          <p className="text-[8px] animate-pulse">--- 正在解鎖更多隱藏興趣 ---</p>
        </div>
      </motion.div>
    </div>
  );
}
