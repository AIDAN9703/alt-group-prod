"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".contact-element",
      { opacity: 0, scale: 0.95 },
      { 
        opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%"
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative py-32 md:py-48 px-4 md:px-12 bg-black border-b border-[var(--line)]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center">
        
        <div className="contact-element text-[var(--accent)] font-[var(--font-space-grotesk)] uppercase tracking-[0.3em] text-sm mb-12">
          // TERMINAL ACCESS GRANTED
        </div>

        <h2 className="contact-element font-[var(--font-rajdhani)] text-5xl md:text-9xl font-bold uppercase tracking-tighter text-white mb-16 leading-[0.8] hover-target">
          INITIATE<br/>HANDSHAKE
        </h2>

        <div className="contact-element w-full max-w-2xl relative">
          <input 
            type="email" 
            placeholder="ENTER AUTHORIZED EMAIL ID" 
            className="w-full bg-transparent border border-[var(--line)] text-white font-[var(--font-space-grotesk)] px-6 py-6 text-xl tracking-widest outline-none focus:border-[var(--accent)] transition-colors hover-target uppercase"
          />
          <button className="w-full mt-4 bg-white text-black font-[var(--font-rajdhani)] text-2xl font-bold uppercase py-6 hover:bg-[var(--accent)] hover:text-white transition-colors duration-300 hover-target">
            Execute Command
          </button>
        </div>

      </div>
    </section>
  );
}
