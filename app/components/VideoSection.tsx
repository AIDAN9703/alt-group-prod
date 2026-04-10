"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register outside component to avoid double-registration issues in React Strict Mode
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VideoSection() {
  const outerRef = useRef<HTMLDivElement>(null);   // tall scroll container
  const stickyRef = useRef<HTMLDivElement>(null);  // sticky inner viewport
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const video = videoRef.current;
    if (!outer || !video) return;

    // Use a plain scroll event to drive currentTime — no GSAP pin needed.
    // The outer div is 600vh tall which gives plenty of scroll room.
    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const scrolled = -rect.top; // how many px we scrolled into the section
      const total = rect.height - window.innerHeight; // total scrollable distance
      if (total <= 0 || !video.duration) return;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      video.currentTime = progress * video.duration;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* Outer wrapper — 600vh tall — gives scroll room while inner is sticky */
    <div ref={outerRef} className="relative" style={{ height: "600vh" }}>
      {/* Sticky inner — sticks to viewport while user scrolls through the 600vh */}
      <div ref={stickyRef} className="sticky top-0 h-screen w-full bg-black border-b border-[var(--line)] flex items-center justify-center overflow-hidden">

        {/* Video */}
        <video
          ref={videoRef}
          src="/silver-liquid.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
          preload="auto"
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />

        {/* Overlay text */}
        <div className="relative z-10 text-center max-w-5xl px-6 pointer-events-none">
          <h2 className="font-[var(--font-rajdhani)] text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white mb-6 leading-none select-none">
            Algorithmic <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>Fluidity</span>
          </h2>
          <div className="font-[var(--font-space-grotesk)] text-zinc-300 text-lg md:text-2xl uppercase tracking-widest bg-black/80 p-8 backdrop-blur-xl border border-[rgba(255,255,255,0.4)] shadow-[0_0_50px_rgba(0,0,0,0.9)] inline-block select-none relative overflow-hidden">
            <span className="relative z-10">Data flows like a current. We map, optimize, and synthesize the chaos into perfect infrastructure.</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
