"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Line sweep animation
    gsap.fromTo(".about-line",
      { width: 0 },
      { 
        width: "100%", 
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1
        }
      }
    );

    // Fade up blocks
    gsap.fromTo(".about-block",
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%"
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative py-32 md:py-48 px-4 md:px-12 bg-black border-b border-[var(--line)]">
      <div className="absolute top-0 left-0 h-full w-[1px] bg-[var(--line)] ml-4 md:ml-12" />
      
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-20">
        
        <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div className="about-block text-xs font-[var(--font-space-grotesk)] tracking-[0.2em] uppercase text-zinc-500 mb-12"> // Thesis Statement</div>
          
          <div className="about-block">
            <div className="text-[var(--accent)] font-[var(--font-rajdhani)] text-7xl font-bold leading-none mb-4 tracking-tighter hover-target">2.4M</div>
            <div className="text-zinc-600 text-sm font-[var(--font-space-grotesk)] uppercase tracking-widest">Active Models & Parameters Managed</div>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="about-line h-[1px] bg-[var(--accent)] w-0 mb-12" />
          
          <h2 className="about-block font-[var(--font-rajdhani)] text-4xl md:text-6xl uppercase tracking-tighter text-white leading-[1.1] mb-12 hover-target">
            We believe in dominance through intelligence. Alg Group is an apex incubator fusing capital with absolute computational power.
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="about-block">
              <h3 className="text-white font-[var(--font-rajdhani)] text-xl tracking-widest uppercase mb-4 border-b border-[var(--line)] pb-4">01. AI Consulting</h3>
              <p className="font-[var(--font-space-grotesk)] text-zinc-400 text-sm md:text-base leading-relaxed">
                Our flagship consulting company takes legacy titans and transforms them into algorithmic powerhouses. We don't just optimize processes; we rebuild them around sophisticated, proprietary LLM and ML architectures.
              </p>
            </div>
            
            <div className="about-block">
              <h3 className="text-white font-[var(--font-rajdhani)] text-xl tracking-widest uppercase mb-4 border-b border-[var(--line)] pb-4">02. Venture Ops</h3>
              <p className="font-[var(--font-space-grotesk)] text-zinc-400 text-sm md:text-base leading-relaxed">
                Strategic capital allocation paired with iron-clad operational execution. We don't passively invest. We aggressively scale products that build the infrastructure of tomorrow's economy.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
