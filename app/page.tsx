"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false); /* 定義狀態：按鈕是否已被點擊 */

  /* 定義點擊「Ok」按鈕後的處理函數 */
  const handleOkClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      router.push("/about");
    }, 1000);
  };

  /* 頁面主容器 */
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8">    
      {/* 視窗 */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="retro-window w-full max-w-[500px] bg-[#fff3e9]">
        {/* 視窗頂部 */}
        <div className="retro-header border-b-4 border-black">
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-white border-2 border-black"></div>
            <span>JUST A CAT</span>
          </div>
          {/* 右上控制按鈕 */}
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-white border-2  border-black text-black flex items-center justify-center text-[8px]">_</div>
            <div className="w-4 h-4 bg-white border-2  border-black text-black flex items-center justify-center text-[8px]">X</div>
          </div>
        </div>
        {/* 視窗內容 */}
        <div className="p-8 md:p-12 flex flex-col items-center gap-8 text-center">
          <div className="text-[10px] md:text-sm leading-relaxed">
            {/* 根據點擊狀態顯示不同文字 */}
            {isClicked ? (
              <p className="text-[#FF9149] animate-bounce">正在載入個人資料...<br/>LOADING PROFILE...</p>
            ) : (
              <>
                <p>你捕獲了一隻野生貓咪</p>
                <p className="mt-2">You have captured a wild cat.</p>
              </>
            )}
          </div>
          {/* 視窗圖片*/}
          <motion.img src="/cat.gif" alt="cat" className="w-40 h-40 object-contain"/>        
          {/* 互動按鈕 */}
          <button 
            onClick={handleOkClick}
            className="retro-button px-12 py-4 text-sm md:text-lg bg-[#FFECDB] hover:bg-[#FF9149]">           
            {/* 點擊後按鈕文字變更 */}
            {isClicked ? "Wait..." : "Catch!"}
          </button>
        </div>
      </motion.div>
      {/* 歡迎卡片 */}
      <div className="retro-window p-6 bg-white w-full max-w-[600px]">
        <h2 className="text-sm md:text-xl mb-4 border-b-4 border-black pb-2">歡迎來到我的個人網頁</h2>
        <p className="text-[8px] md:text-xs leading-loose">
          這是一個用Next.js寫成的個人數位履歷網頁，上面的貓咪是做好玩的，可以不理他。
        </p>
      </div>
    </div>
  );
}
