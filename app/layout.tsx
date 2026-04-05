import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa6"; /* 匯入 Lucide 圖示庫中的社群圖示 */

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
    <html>
      {/* 設定 Body 樣式 */}
      <body className="min-h-full flex items-center justify-center p-0 md:p-4">  
        {/* 大視窗框架 */}
        <div className="retro-window w-full max-w-[1200px] h-full md:h-[90vh] flex flex-col bg-[#ffebd9] overflow-hidden">  
          {/* 視窗頂部標題列 */}
          <div className="retro-header border-b-4 border-black bg-black text-white px-4 py-2 flex justify-between items-center shrink-0">
            {/* 左側標題區域 */}
            <div className="flex items-center gap-3">
              {/* 模擬系統圖示的小方塊 */}
              <div className="w-5 h-5 bg-white border-2 border-black flex items-center justify-center">
                {/* 圖示內部的黑色核心 */}
                <div className="w-2 h-2 bg-black"></div>
              </div>
              <span className="text-[10px] md:text-sm tracking-widest">PINYU_RESUME_V1.0.exe</span>
            </div>
            {/* 右上控制按鈕區域(假) */}
            <div className="flex gap-2">
              <div className="bg-[#fef8f2] text-black border-2 border-black p-1 text-[8px] w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-white">_</div>
              <div className="bg-[#fef8f2] text-black border-2 border-black p-1 text-[8px] w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-white">□</div>
              <div className="bg-[#FF9149] text-black border-2 border-black p-1 text-[8px] w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-white">X</div>
            </div>
          </div>

          {/* 左側 */}
          <div className="flex flex-col md:flex-row flex-1 overflow-hidden">      
            {/* 側邊導覽列 */}
            <div className="flex flex-col w-full md:w-[260px] h-auto md:h-full p-4 md:p-6 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white z-10 shrink-0 overflow-y-auto gap-4 md:gap-6">
              {/* 個人資訊區塊 */}
              <div className="flex flex-row md:flex-col items-center justify-center md:justify-start gap-4">
                {/* 頭像 */}
                <div className="retro-window w-[100px] h-[100px]">
                  <div className="w-full h-full relative">
                    <img src="me.jpg" alt="me" className="w-full h-full object-cover"/>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-sm font-bold mb-1">林品妤</h1>
                  <p className="text-[8px] text-gray-600">廣電三 & 數位內容</p>
                </div>
              </div>

              {/* 社群按鈕 */}
              <div className="flex justify-center gap-2">
                <a href="https://www.instagram.com/pinyu_nov.30/" target="_blank" rel="noopener noreferrer" className="retro-button p-2 bg-[#AFDDFF] hover:bg-white"><FaInstagram size={14} /></a>
                <a href="https://github.com/wrrrswrr" target="_blank" rel="noopener noreferrer" className="retro-button p-2 bg-[#FF9149] hover:bg-white"><FaGithub size={14} /></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=112405025@g.nccu.edu.tw" target="_blank" rel="noopener noreferrer" className="retro-button p-2 bg-[#60B5FF] hover:bg-white"><FaEnvelope size={14} /></a>
              </div>

              {/* 導覽選單 */}
              <nav className="flex flex-row flex-wrap md:flex-col justify-center md:justify-start gap-2 border-t-2 md:border-t-0 border-black/10 pt-4 md:pt-0">
                <Link href="/"><div className="retro-button w-full text-[10px] bg-[#FFECDB] hover:bg-[#FF9149]">首頁 HOME</div></Link>
                <Link href="/about"><div className="retro-button w-full text-[10px] bg-[#ffcc9f] hover:bg-[#FF9149]">關於我 ABOUT</div></Link>
                <Link href="/hobby"><div className="retro-button w-full text-[10px] bg-[#FFECDB] hover:bg-[#FF9149]">我的興趣 HOBBY</div></Link>
                <Link href="/design"><div className="retro-button w-full text-[10px] bg-[#ffcc9f] hover:bg-[#FF9149]">設計專案 DESIGN</div></Link>
                <Link href="/code"><div className="retro-button w-full text-[10px] bg-[#FFECDB] hover:bg-[#FF9149]">程式專案 CODE</div></Link>
              </nav>
            </div>

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
