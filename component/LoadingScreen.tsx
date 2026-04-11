"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const steps = [0, 15, 32, 48, 72, 85, 100];
    let currentStep = 0;

    const nextStep = () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        setProgress(steps[currentStep]);
        
        // 隨機延遲，模擬卡頓感
        const delay = Math.random() * 600 + 200;
        setTimeout(nextStep, delay);
      } else {
        // 滿了之後停頓一下再裂開
        setTimeout(() => {
          setIsFinished(true);
          // 動畫結束後移除組件
          setTimeout(() => setShowContent(false), 1000);
        }, 500);
      }
    };

    const initialTimeout = setTimeout(nextStep, 500);
    return () => clearTimeout(initialTimeout);
  }, []);

  if (!showContent) return null;

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div 
          initial={{ opacity: 1 }}
          animate={isFinished ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black overflow-hidden pointer-events-auto"
        >
          {/* 中央進度條區域 */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={isFinished ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-white font-pixel text-[10px] md:text-xs tracking-[0.2em] animate-pulse h-4">
              {progress < 40 ? "LOADING CHRACTER DATA..." : progress < 100 ? "GENERATING WORLD..." : "WORLD READY!"}
            </div>

            {/* 進度條外框 */}
            <div className="w-[280px] md:w-[400px] h-10 border-4 border-white bg-black p-1 relative">
              {/* 內部填滿部分 */}
              <div 
                className="h-full bg-white transition-all duration-100 ease-steps"
                style={{ width: `${progress}%` }}
              />
              
              {/* 裝飾性像素點 */}
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-white" />
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-white" />
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white" />
              <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-white" />
            </div>

            <div className="text-white font-pixel text-[10px]">
              {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
