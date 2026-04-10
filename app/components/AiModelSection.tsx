"use client";

import { useRef, useEffect } from "react";

export default function AiModelSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const videoWrapper = videoWrapperRef.current;
    const textContent = textContentRef.current;
    const video = videoRef.current;
    if (!outer || !videoWrapper || !textContent || !video) return;

    video.pause(); // prevent autoplay fighting the manual scrubbing

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      
      if (total <= 0) return;
      
      const progress = Math.max(0, Math.min(1, scrolled / total));

      // Tie video playback to the scroll progress
      if (video.duration) {
        video.currentTime = progress * video.duration;
      }
      
      // Text fades in and moves up gracefully over the second half of the scroll, 
      // as the video natively zooms "into" the chip.
      let textOpacity = 0;
      let textTranslateY = 50;
      let textScale = 0.8;
      
      if (progress > 0.5) {
        const rawTextProgress = (progress - 0.5) / 0.4; // 0 to 1 between 50% and 90%
        const textProgress = Math.min(1, Math.max(0, rawTextProgress));
        
        const textEase = 1 - Math.pow(1 - textProgress, 3);
        textOpacity = textEase;
        textTranslateY = 50 * (1 - textEase);
        textScale = 0.8 + 0.2 * textEase;
      }
      
      textContent.style.opacity = textOpacity.toString();
      textContent.style.transform = `translateY(${textTranslateY}px) scale(${textScale})`;
      textContent.style.pointerEvents = textOpacity > 0.5 ? "auto" : "none";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize bounds
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={outerRef} className="relative z-10" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen w-full bg-black flex items-center justify-center overflow-hidden border-b border-[var(--line)]">
        
        {/* Container for the video */}
        <div 
          ref={videoWrapperRef} 
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black"
        >
          <video
            ref={videoRef}
            src="/ai-zoom-through-chip.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          {/* Overlay to subtly darken the edges and make text pop */}
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
        </div>

        {/* Text that fades in AFTER we zoom "through" the video */}
        <div 
          ref={textContentRef} 
          className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl will-change-transform opacity-0 pointer-events-none"
        >
          <div className="inline-block border border-[var(--accent)] text-[var(--accent)] px-4 py-1 rounded-full text-xs font-[var(--font-space-grotesk)] tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(163,31,52,0.3)]">
            System Core Accessed
          </div>
          <h2 className="text-5xl md:text-8xl font-[var(--font-rajdhani)] font-bold text-white uppercase leading-none mb-6">
            Meet <span className="text-[var(--accent)]" style={{ textShadow: "0 0 30px rgba(163,31,52,0.8)" }}>Alex.AI</span>
          </h2>
          <p className="text-zinc-300 font-[var(--font-space-grotesk)] text-lg md:text-2xl leading-relaxed">
            The flagship neural architecture driving cognitive processing across all Alg Group entities. Hyper-intelligent. Unrelentingly capable. Boundless scalability.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="px-8 py-4 bg-[var(--accent)] text-white font-[var(--font-rajdhani)] uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-black transition-colors pointer-events-auto cursor-pointer">
              Initiate Sequence
            </button>
            <button className="px-8 py-4 border border-[rgba(255,255,255,0.2)] text-white font-[var(--font-rajdhani)] uppercase tracking-widest text-sm hover:bg-white/10 transition-colors pointer-events-auto cursor-pointer">
              Read Whitepaper
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
