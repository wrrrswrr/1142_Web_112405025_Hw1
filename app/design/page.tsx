"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, ChevronLeft, ChevronRight, Eye } from "lucide-react";

export default function Design() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"images" | "prototype">("images");


  const projects = [
    { 
      title: "手機APP《插座神偷》", 
      category: "UI", 
      footercolor: "#FF9149", 
      images: ["/socketthief.jpg"], 
      link: "https://excellent-environment-840225.framer.app/#hero",
      figmaEmbedUrl: "https://embed.figma.com/proto/EgAKt7i0HXd9IhAqOJFv3k/%E6%9C%9F%E6%9C%AB%E5%81%B7%E9%9B%BB?node-id=67-556&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=67%3A556&embed-host=share",
      description: "這是一款能隨時隨地偷電的APP，幫助你找到最近的插座。",
    },
    { 
      title: "AE動畫《Not This Way!》", 
      category: "AE/AI", 
      footercolor: "#AFDDFF", 
      images: ["/notthisway.jpg"], 
      videoUrl: "https://www.youtube.com/embed/18ydl3TrEJI?si=lyqMUUOpW1q0vqXo",
      description: "使用 After Effects 與 Illustrator 製作的動態影像作品，關於一個政大學生搭到反方向捷運的故事。"
    },
    { 
      title: "PS作品《關於未來》", 
      category: "PS", 
      footercolor: "#AFDDFF", 
      images: ["/future.jpg"], 
      link: "",
      description: "此為數位平台PS課程所產出的作品，主題是要關於2025年。"
    },
    { 
      title: "排版作品《馬卡龍》", 
      category: "ID", 
      footercolor: "#ffcc9f", 
      images: [
        "/macaron1.jpg",
        "/macaron2.jpg",
        "/macaron3.jpg",
        "/macaron4.jpg",
      ], 
      link: "",
      description: "此為修習數位平台InDesign課程時製作的馬卡龍主題排版，以日系雜誌風作為排版的主要視覺。"
    },
    { 
      title: "PS作品《Rainy days at NCCU》", 
      category: "PS", 
      footercolor: "#60B5FF", 
      images: ["/rainy.png"], 
      link: "",
      description: "此為多媒體與程式設計課程中的作品。我以政大多雨的天氣為主題，使用拼貼風格製作海報。"
    },
    { 
      title: "LOGO設計《FOX FRIES》", 
      category: "AI", 
      footercolor: "#FF9149", 
      images: ["/logo.png", "/logo1.png"], 
      link: "",
      description: "此為數位平台Illustrator課程中設計的虛擬品牌LOGO。"
    },
    { 
      title: "排版作品《機器人角色設計小書》", 
      category: "ID/PROCREATE", 
      footercolor: "#ffcc9f", 
      images: [
        "/01.jpg",
        "/02.jpg",
        "/03.jpg",
        "/04.jpg",
        "/05.jpg",
        "/06.jpg",
        "/07.jpg",
        "/08.jpg",
        "/09.jpg",
        "/010.jpg",
        "/011.jpg",
        "/012.jpg",
        "/013.jpg",
        "/014.jpg",
        "/015.jpg",
        "/016.jpg",
        "/017.jpg",
        "/018.jpg",
        "/019.jpg",
        "/020.jpg",
        "/021.jpg",
        "/022.jpg",
        "/023.jpg",
        "/024.jpg",
        "/025.jpg",
        "/026.jpg",
        "/book1.jpg",
        "/book2.jpg",
        "/book3.jpg",
        "/book4.jpg",
      ], 
      link: "",
      description: "此為創意與設計課程的期中作業，需要製作實體書去呈現三種機器人原創角色。"
    },
    { 
      title: "AIGC作品《數位窺視時代》", 
      category: "AIGC", 
      footercolor: "#AFDDFF", 
      images: ["/aiwork.jpg"], 
      link: "",
      description: "這作品是人工智慧生成圖像與創造力課程的作業。整個作品都是運用AI生成圖像工具“Leonardo	AI”所生成與編輯的。"
    },
    { 
      title: "AI作品《Donut Bird》", 
      category: "AI", 
      footercolor: "#ffcc9f", 
      images: ["/bird.jpg"], 
      link: "",
      description: "此為數位平台Illustrator課程中設計的吉祥物。"
    },
    { 
      title: "桌遊設計《農場大亂鬥》", 
      category: "PROCREATE", 
      footercolor: "#FF9149", 
      images: [
        "/map.jpg",
        "/chracter.png",
        "/items.png",
        "/boardgame1.jpg",
        "/boardgame2.jpg",
        "/boardgame3.jpg",
      ], 
      link: "",
      description: "此為創意與設計課程的期末小組作業，是要設計一個桌遊並製成實體。我所負責的部分是地圖、道具以及角色形象的設計。"
    },
    { 
      title: "板繪作品《壞鱷魚》", 
      category: "PROCREATE", 
      footercolor: "#60B5FF", 
      images: ["/meme.jpg"], 
      link: "",
      description: "此作品為跨媒體識讀課程的期中作品，要以媒體識讀為主題去製作迷因。"
    },
  ];

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* 頁面動畫 */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="retro-window p-4 md:p-8 bg-white">
        {/* 大標題 */}
        <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-2">
          <h2 className="text-lg md:text-xl font-bold text-black">設計作品 DESIGN</h2>
          <div className="text-[8px] bg-black text-white px-2 py-1">ARCHIVE</div>
        </div>       
        {/* 作品區域 */}
        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="retro-window overflow-hidden group break-inside-avoid bg-white">
              {/* 小標題列 */}
              <div className="retro-header border-b-4 border-black">
                <span>{project.category}</span>
                <div className="w-3 h-3 bg-white border-2 border-black"></div>
              </div>
              {/* 作品圖片 */}
              <div className="relative overflow-hidden border-b-4 border-black bg-gray-100">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-auto block"/>
              </div>
              {/* 作品底部資訊區 */}
              <div className="p-4 flex flex-col gap-3" style={{ backgroundColor: project.footercolor }}> 
                <h3 className="font-bold text-xs flex flex-row text-black">{project.title}</h3>
                <button 
                  onClick={() => openModal(project)}
                  className="retro-button w-full bg-white hover:bg-black hover:text-white text-[10px] font-bold py-2 flex flex-row items-center justify-center gap-2 transition-colors leading-none whitespace-nowrap"
                >
                  <Eye size={14} className="shrink-0" />
                  <span>查看詳情 DETAILS</span>
                </button>
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
              className="retro-window w-full max-w-4xl bg-white overflow-hidden relative z-10"
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

              <div className="p-4 md:p-6 flex flex-col gap-4 overflow-y-auto max-h-[calc(90vh-100px)]">
                {/* 判斷是否為影片模式，影片模式維持上下排版，非影片模式改為左右排版 */}
                {selectedProject.videoUrl ? (
                  <div className="flex flex-col gap-4">
                    {/* 影片播放器 */}
                    <div className="flex justify-center w-full">
                      <div className="retro-window w-full aspect-video overflow-hidden bg-black relative">
                        <iframe 
                          className="w-full h-full border-0"
                          src={selectedProject.videoUrl}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                      </div>
                    </div>

                    {/* 影片資訊 */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] bg-black text-white px-2 py-0.5">{selectedProject.category}</span>
                        <h3 className="font-bold text-sm text-black">{selectedProject.title}</h3>
                      </div>
                      <p className="text-[10px] leading-relaxed text-gray-700 font-mono">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* 影片操作按鈕 */}
                    <div className="flex gap-3 mt-2">
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="retro-button w-full bg-[#eee] hover:bg-white text-black text-[10px] font-bold"
                      >
                        CLOSE
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 左側*/}
                    <div className="flex-1 flex justify-center items-start">
                      {selectedProject.figmaEmbedUrl ? (
                        <div className={`retro-window overflow-hidden bg-black w-full ${selectedProject.category === 'UI' ? 'max-w-[320px] aspect-9/19.5' : 'aspect-video md:aspect-4/3'} max-h-[60vh]`}>
                          <iframe 
                            className="w-full h-full border-0"
                            src={selectedProject.figmaEmbedUrl} 
                            allowFullScreen
                            allow="clipboard-write; draw-on-canvas; focus-start; fullscreen; geolocation; microphone; model-viewer; xr-spatial-tracking"
                          />
                        </div>
                      ) : (
                        <div className="retro-window overflow-hidden relative group/slider w-fit max-w-full bg-white">
                          <img 
                            src={selectedProject.images[currentImgIndex]} 
                            alt={selectedProject.title} 
                            className="block max-w-full max-h-[60vh] w-auto h-auto object-contain" 
                          />
                          
                          {/* 左右切換按鈕 */}
                          {selectedProject.images.length > 1 && (
                            <>
                              <button 
                                onClick={prevImg}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-1 hover:bg-[#FF9149] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20"
                              >
                                <ChevronLeft size={20} />
                              </button>
                              <button 
                                onClick={nextImg}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-1 hover:bg-[#FF9149] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-20"
                              >
                                <ChevronRight size={20} />
                              </button>
                              {/* 頁碼指示 */}
                              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[8px] px-2 py-1 border border-white z-20">
                                {currentImgIndex + 1} / {selectedProject.images.length}
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* 右側 */}
                    <div className="w-full md:w-[320px] flex flex-col gap-6 shrink-0 bg-[#f9f9f9] p-6 border-l-4 border-black">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <span className="inline-block text-[10px] bg-black text-white px-2 py-1 font-bold tracking-wider">
                            {selectedProject.category}
                          </span>
                          <h3 className="font-bold text-xl text-black leading-tight border-b-2 border-black pb-2">
                            {selectedProject.title}
                          </h3>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -left-3 top-0 bottom-0 w-1 bg-[#FF9149]"></div>
                          <p className="text-[11px] leading-relaxed text-gray-800 font-mono pl-2">
                            {selectedProject.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 mt-auto pt-6 border-t-2 border-dashed border-gray-400">
                        {selectedProject.link && (
                          <a 
                            href={selectedProject.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="retro-button w-full bg-[#AFDDFF] hover:bg-white text-black flex flex-row items-center justify-center gap-2 text-[10px] font-bold py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
                          >
                            <ExternalLink size={14} className="shrink-0" />
                            <span>查看作品 VIEW PROJECT</span>
                          </a>
                        )}
                        <button 
                          onClick={() => setSelectedProject(null)}
                          className="retro-button w-full bg-[#eee] hover:bg-white text-black text-[10px] font-bold py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
                        >
                          CLOSE WINDOW
                        </button>
                      </div>
                    </div>
                  </div>
                )}
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
