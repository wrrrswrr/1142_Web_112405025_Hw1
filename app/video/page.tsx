"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play } from "lucide-react";

const videos = [
  { 
    id: 1, 
    title: "《The Last One Girl》", 
    category: "MV COVER", 
    thumbnail: "/video1.png", 
    videoUrl: "https://www.youtube.com/embed/WSa-yWEnXSU?si=uW-yGHiwf1035GD9", 
    compareLink: "https://youtu.be/G37yRCJ4t1E",
    description: "這是多媒體與程式設計課程的期末作業，由我使用PR剪輯，翻拍Rosé的《number one girl》mv。"
  },
  { 
    id: 2, 
    title: "《插座神偷APP》", 
    category: "VIDEO AD", 
    thumbnail: "/video2.png", 
    videoUrl: "https://www.youtube.com/embed/2KiUPd6ipss?si=7-neDwjDPLSe2P1R",
    description: "人機介面課程期末的APP介紹影片，不小心剪得太像廣告了。"
  },
  { 
    id: 3, 
    title: "《世界好好吃》", 
    category: "PILOT", 
    thumbnail: "/video3.png", 
    videoUrl: "https://www.youtube.com/embed/jdQlOcxoFY4?si=WAHeKcnHt690BCVJ",
    description: "此為媒體企劃課程的期末兒童節目樣帶，由我負責精剪。"
  },
  { 
    id: 4, 
    title: "《POV: 選上多媒體與程式設計》", 
    category: "MEME", 
    thumbnail: "/video4.png", 
    videoUrl: "https://www.youtube.com/embed/c9LIQp8LAbM?si=AnO9OK8xE2pFV0s1",
    description: "這事多媒體與程式設計的剪輯作業，以前陣子流行過的Cat Memes作為主題，使用PR剪輯。"
  },
  { 
    id: 5, 
    title: "《洛杉磯鬼鎮懸案》", 
    category: "AIGC", 
    thumbnail: "/video5.png", 
    videoUrl: "https://www.youtube.com/embed/I-KvGUmvAiM?si=hUGNPr0pFletIU7M",
    description: "此為人工智慧生成圖像與創造力課程的作業，使用AI產出影片和音樂，再由我後製剪輯。"
  },
];

export default function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="retro-window p-4 md:p-8 bg-white"
      >
        {/* 標題區塊 */}
        <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-2">
          <h2 className="text-lg md:text-xl font-bold">剪輯作品 VIDEO</h2>
          <div className="text-[8px] bg-black text-white px-2 py-1">PLAYLIST</div>
        </div>

        <p className="text-[10px] text-gray-600 mb-8 font-mono tracking-widest">STORYTELLING THROUGH MOTION AND SOUND.</p>

        {/* 影片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="retro-window overflow-hidden group cursor-pointer bg-white"
              onClick={() => setSelectedVideo(video)}
            >
              {/* 縮圖區 */}
              <div className="relative aspect-video overflow-hidden border-b-4 border-black bg-gray-100">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Play size={24} fill="black" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 bg-black text-white text-[8px] px-2 py-1">
                  {video.category}
                </div>
              </div>

              {/* 資訊區 */}
              <div className="p-4 bg-[#FFECDB]">
                <h3 className="font-bold text-xs text-black mb-1">{video.title}</h3>
                <p className="text-[8px] text-gray-600 line-clamp-1">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部裝飾訊息 */}
        <div className="mt-8 retro-window p-4 bg-[#AFDDFF] text-black text-center">
          <p className="text-[8px] animate-pulse">--- 更多影片剪輯中 ---</p>
        </div>
      </motion.div>

      {/* 影片播放 */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedVideo(null)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="retro-window w-full max-w-4xl bg-white overflow-hidden relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 標題列 */}
              <div className="retro-header border-b-4 border-black p-2 flex justify-between items-center bg-black text-white">
                <span className="text-[10px] tracking-widest">VIDEO_PLAYER.exe - {selectedVideo.title}</span>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="bg-[#FF9149] border-2 border-black w-6 h-6 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="p-4 md:p-6 flex flex-col gap-4">
                {/* 影片播放器 */}
                <div className="retro-window overflow-hidden bg-black aspect-video relative">
                  <iframe 
                    className="w-full h-full border-0"
                    src={selectedVideo.videoUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>

                {/* 文字資訊 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] bg-black text-white px-2 py-0.5">{selectedVideo.category}</span>
                    <h3 className="font-bold text-sm text-black">{selectedVideo.title}</h3>
                  </div>
                  <p className="text-[10px] leading-relaxed text-gray-700 font-mono">
                    {selectedVideo.description}
                  </p>
                </div>

                <div className="flex gap-3 mt-auto">
                  {selectedVideo.compareLink && (
                    <a 
                      href={selectedVideo.compareLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-button flex-1 bg-[#AFDDFF] hover:bg-white text-black text-[10px] font-bold flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <span>查看對照版 COMPARE</span>
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedVideo(null)}
                    className={`retro-button ${selectedVideo.compareLink ? 'flex-1' : 'w-full'} bg-[#eee] hover:bg-white text-black text-[10px] font-bold`}
                  >
                    CLOSE PLAYER
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}