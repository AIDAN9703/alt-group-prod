"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Footer() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".marquee-inner", {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1
    });
  }, { scope: container });

  return (
    <footer ref={container} className="bg-black pt-24 pb-8 border-t border-[var(--line)] relative overflow-hidden">
      
      {/* Marquee */}
      <div className="w-full overflow-hidden border-y border-[var(--line)] py-4 mb-24 flex whitespace-nowrap">
        <div className="marquee-inner flex font-[var(--font-rajdhani)] text-5xl md:text-8xl font-bold uppercase tracking-tighter text-[rgba(255,255,255,0.05)] select-none">
          <span>ALG GROUP /// APEX INTEL /// DEEP TECH /// ALG GROUP /// APEX INTEL /// DEEP TECH ///&nbsp;</span>
          <span>ALG GROUP /// APEX INTEL /// DEEP TECH /// ALG GROUP /// APEX INTEL /// DEEP TECH ///&nbsp;</span>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-end justify-between font-[var(--font-space-grotesk)] text-xs md:text-sm text-zinc-600 uppercase tracking-widest gap-8">
        
        <div className="flex flex-col gap-2">
          <div className="font-[var(--font-rajdhani)] text-3xl font-bold text-white hover-target">T.A.G.</div>
          <div>EST. 2026 / GLOBAL COORDS</div>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
             <a href="#" className="hover:text-[var(--accent)] transition-colors hover-target">SECURE LOGIN</a>
             <a href="#" className="hover:text-[var(--accent)] transition-colors hover-target">DATA POLICY</a>
          </div>
          <div className="flex flex-col gap-2">
             <a href="#" className="hover:text-[var(--accent)] transition-colors hover-target">SYS ADMIN</a>
             <a href="#" className="hover:text-[var(--accent)] transition-colors hover-target">MANIFESTO</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
