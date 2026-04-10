"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.to(".hero-title-line", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.2,
      delay: 2.8 // Wait for boot loader
    })
    .fromTo(".hero-meta", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=1"
    );

    gsap.to(".hero-title-wrapper", {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      },
      y: 200,
      scale: 0.9,
      opacity: 0,
      ease: "none"
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-screen min-h-[800px] flex flex-col justify-end pb-12 pt-32 px-4 md:px-12 overflow-hidden border-b border-[var(--line)]">
      
      {/* Abstract Tech Data Stream Background -> Replaced with Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        <video 
          src="/server-farm.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="hero-title-wrapper z-10 w-full max-w-screen-2xl mx-auto flex flex-col items-start justify-end pt-24">
        <div className="overflow-hidden">
          <h1 className="hero-title-line reveal-text huge-text font-[var(--font-rajdhani)] font-bold text-white uppercase m-0 p-0 hover-target">
            ALG
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-8">
          <div className="overflow-hidden">
            <h1 className="hero-title-line reveal-text huge-text font-[var(--font-rajdhani)] font-bold text-[var(--accent)] uppercase m-0 p-0 hover-target">
              GROUP
            </h1>
          </div>
          
          <div className="hero-meta flex flex-col items-start md:items-end text-sm font-[var(--font-space-grotesk)] text-zinc-400 pb-2 md:pb-8 leading-relaxed gap-6 text-left md:text-right">
            <div className="max-w-sm">
              We acquire, scale, and pioneer the bleeding edge of Artificial Intelligence and enterprise infrastructure.
            </div>
            <div className="tracking-[0.2em] font-bold uppercase text-white border border-[var(--line)] px-4 py-2 hover-target">
              EST. 2026 <span className="text-[var(--accent)]">//</span> GLOBAL CONGLOMERATE
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
