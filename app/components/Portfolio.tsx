"use client";

import { useRef, useEffect } from "react";

const portfolio = [
  {
    num: "01",
    title: "ALEX.AI",
    desc: "Enterprise artificial intelligence. Predictive modeling, autonomous infrastructure, and cognitive automation.",
  },
  {
    num: "02",
    title: "QUANTUM",
    desc: "High-frequency edge computing. Latency virtualization and sub-millisecond network topologies.",
  },
  {
    num: "03",
    title: "NEXUS.VC",
    desc: "Capital injection for deep-tech. Accelerating the founders rewriting the rules of physics and markets.",
  }
];

export default function Portfolio() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    /**
     * Pure CSS sticky approach — no GSAP pin involved.
     *  • The outer div is 400vh * numPanels tall; inner is sticky.
     *  • On scroll we translate the horizontal track proportionally.
     */
    const SCROLL_PER_PANEL = window.innerHeight * 4; // 4 full screens per card
    const totalScroll = SCROLL_PER_PANEL * (portfolio.length - 1);

    const onScroll = () => {
      const rect = outer.getBoundingClientRect();
      const scrolled = -rect.top;
      if (scrolled < 0) return;
      // Clamp progress to [0, 1]
      const progress = Math.min(1, Math.max(0, scrolled / totalScroll));
      const maxTranslate = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(${-progress * maxTranslate}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /* Outer wrapper: tall enough to provide scroll room for all panels */
    <div ref={outerRef} style={{ height: `${portfolio.length * 400}vh` }}>
      {/* Sticky container that stays on screen */}
      <div className="sticky top-0 h-screen overflow-hidden bg-black border-b border-[var(--line)]">

        {/* Section label */}
        <div className="absolute top-12 left-4 md:left-12 z-20 mix-blend-difference pointer-events-none">
          <h2 className="font-[var(--font-rajdhani)] text-3xl md:text-5xl font-bold uppercase tracking-widest text-white">
            ENTITIES_
          </h2>
        </div>

        {/* Horizontally translating track */}
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ width: `${portfolio.length * 100}vw` }}
        >
          {portfolio.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-center px-4 md:px-24 border-r border-[var(--line)] flex-shrink-0"
              style={{ width: "100vw", height: "100%" }}
            >
              {/* Ghost number watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[var(--font-rajdhani)] text-[40vw] font-bold text-[rgba(255,255,255,0.02)] leading-none select-none pointer-events-none">
                {item.num}
              </div>

              <div className="relative z-10 max-w-4xl">
                <div className="flex items-start gap-8 md:gap-16">
                  <div className="text-[var(--accent)] font-[var(--font-rajdhani)] text-5xl md:text-8xl font-bold leading-none">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-[var(--font-rajdhani)] text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter mb-8 hover-target leading-none">
                      {item.title}
                    </h3>
                    <div className="h-[1px] w-32 bg-[var(--accent)] mb-8" />
                    <p className="font-[var(--font-space-grotesk)] text-zinc-400 text-lg md:text-2xl max-w-xl leading-relaxed">
                      {item.desc}
                    </p>
                    <button className="mt-12 group flex items-center gap-4 hover-target">
                      <span className="font-[var(--font-rajdhani)] uppercase tracking-widest text-white font-bold group-hover:text-[var(--accent)] transition-colors">
                        Initialize Payload
                      </span>
                      <div className="w-12 h-[1px] bg-white group-hover:bg-[var(--accent)] group-hover:w-24 transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
