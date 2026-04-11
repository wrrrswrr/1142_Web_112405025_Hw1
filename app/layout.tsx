import type { Metadata } from "next";
import "./globals.css";
import { DesktopSidebar, MobileMenu } from "@/component/Menu";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";


const geist = Geist({subsets:['latin'],variable:'--font-sans'});


/* 定義並導出網頁的元數據 */
export const metadata: Metadata = {
  title: "林品妤的個人數位履歷",
  description: "就只是林品妤的個人數位履歷",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={cn("h-full", "font-sans", geist.variable)}>
      {/* 設定 Body 樣式 */}
      <body className="h-full flex items-center justify-center p-0 md:p-4 bg-[#a2d2ff]">  
        {/* 大視窗框架 */}
        <div className="retro-window relative w-full max-w-[1200px] h-full md:h-[90vh] flex flex-col bg-[#ffebd9] overflow-hidden">  
          {/* 視窗頂部標題列 */}
          <div className="retro-header border-b-4 border-black bg-black text-white px-4 py-2 flex justify-between items-center shrink-0">
            {/* 左側標題區域 */}
            <div className="flex items-center gap-3">
              {/* 電腦版顯示靜態圖示 */}
              <div className="hidden md:flex w-5 h-5 bg-white border-2 border-black items-center justify-center">
                <div className="w-2 h-2 bg-black"></div>
              </div>
              
              {/* 手機版顯示互動式選單圖示 */}
              <MobileMenu />

              <span className="text-[10px] md:text-sm tracking-widest">PINYU_RESUME_V1.0.exe</span>
            </div>
            {/* 右上控制按鈕區域(假) */}
            <div className="flex gap-2">
              <div className="bg-[#fef8f2] text-black border-2 border-black p-1 text-[8px] w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-white">_</div>
              <div className="bg-[#fef8f2] text-black border-2 border-black p-1 text-[8px] w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-white">□</div>
              <div className="bg-[#FF9149] text-black border-2 border-black p-1 text-[8px] w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-white">X</div>
            </div>
          </div>

          {/* 內容區域 */}
          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">      
            <DesktopSidebar />

            {/* 右邊內容區 */}
            <div className="flex-1 h-full overflow-y-auto p-4 md:p-8 bg-[#dac6b3] relative" style={{ 
                backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 4px, transparent 1px)', 
                backgroundSize: '20px 20px' 
              }}>
              <div className="max-w-4xl mx-auto relative z-10">
                {children}
              </div>
            </div>
          </div>
        </div> 
            
      </body>
    </html>
  );
}
