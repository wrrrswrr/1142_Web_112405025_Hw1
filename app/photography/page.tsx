"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X } from "lucide-react";

const photos = [
  { id: 1, src: "/1.jpg", alt: "1", width: 6000, height: 4000 },
  { id: 2, src: "/2.jpg", alt: "2", width: 6000, height: 4000 },
  { id: 3, src: "/3.jpg", alt: "3", width: 3008, height: 4000 },
  { id: 4, src: "/4.jpg", alt: "4", width: 6000, height: 4000 },
  { id: 5, src: "/5.jpg", alt: "5", width: 6000, height: 4000 },
  { id: 6, src: "/6.jpg", alt: "6", width: 6000, height: 4000 },
  { id: 7, src: "/7.jpg", alt: "7", width: 4000, height: 6000 },
  { id: 8, src: "/8.jpg", alt: "8", width: 6000, height: 4000 },
  { id: 9, src: "/9.jpg", alt: "9", width: 6000, height: 4000 },
  { id: 10, src: "/10.jpg", alt: "10", width: 6000, height: 4000 },
  { id: 11, src: "/11.jpg", alt: "11", width: 6000, height: 4000 },
  { id: 12, src: "/12.jpg", alt: "12", width: 6000, height: 4000 },
  { id: 13, src: "/13.jpg", alt: "13", width: 4958, height: 3801 },
  { id: 14, src: "/14.jpg", alt: "14", width: 6000, height: 4000 },
  { id: 15, src: "/15.jpg", alt: "15", width: 6000, height: 4000 },
];

export default function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="retro-window p-4 md:p-8 bg-white"
      >
        {/* 標題區塊 */}
        <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-2">
          <h2 className="text-lg md:text-xl font-bold">攝影作品 PHOTO</h2>
          <div className="text-[8px] bg-black text-white px-2 py-1">GALLERY</div>
        </div>

        <p className="text-[10px] text-gray-600 mb-8 font-mono tracking-widest">CAPTURING MOMENTS THROUGH THE LENS.</p>

        {/* 排版網格 */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid"
            >
              <div 
                className="retro-window overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedPhoto(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* 懸停遮罩 */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white border-2 border-black px-3 py-1 text-[10px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    VIEW FULL
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部裝飾訊息 */}
        <div className="mt-8 retro-window p-4 bg-[#222] text-black text-center" style={{ backgroundColor: '#FFECDB' }}>
          <p className="text-[8px] animate-pulse">--- 更多專案待產出 ---</p>
        </div>
      </motion.div>

      {/* 燈箱 */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 2 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 關閉按鈕 */}
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#FF9149] transition-colors flex items-center gap-2 group"
              >
                <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">CLOSE</span>
                <X size={32} />
              </button>

              <div className="retro-window p-2 bg-white w-full h-full flex items-center justify-center overflow-hidden">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  width={selectedPhoto.width}
                  height={selectedPhoto.height}
                  className="max-w-full max-h-[80vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* 圖片資訊 */}
              <div className="absolute -bottom-12 left-0 text-white font-mono text-xs tracking-widest">
                IMAGE_ID: {selectedPhoto.id.toString().padStart(3, '0')} // {selectedPhoto.width}x{selectedPhoto.height}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}