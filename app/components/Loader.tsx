"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
      }
    });

    // Simulate loading
    const dummyRef = { val: 0 };
    tl.to(dummyRef, {
      val: 100,
      duration: 2.5,
      ease: "power4.inOut",
      onUpdate: () => {
        setProgress(Math.floor(dummyRef.val));
      }
    })
    .to(".loader-mask", {
      height: 0,
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0.1
    }, "+=0.2")
    .to(container.current, {
      display: "none",
      duration: 0
    });
  }, []);

  return (
    <div ref={container} className="fixed inset-0 z-[99999] flex flex-col items-center justify-center p-8 pointer-events-none">
      
      {/* 3 panels that slide up */}
      <div className="absolute inset-0 flex">
        <div className="loader-mask w-1/3 h-full bg-black border-r border-[var(--line)]" />
        <div className="loader-mask w-1/3 h-full bg-black border-r border-[var(--line)]" />
        <div className="loader-mask w-1/3 h-full bg-black" />
      </div>

      <div className="relative z-10 loader-mask overflow-hidden flex flex-col items-center">
        <div className="text-[var(--accent)] font-[var(--font-space-grotesk)] uppercase tracking-[0.5em] text-xs md:text-sm mb-4">
          Booting System
        </div>
        <div className="font-[var(--font-rajdhani)] text-[15vw] md:text-[8vw] font-bold text-white leading-none tracking-tighter">
          {progress}%
        </div>
      </div>
    </div>
  );
}
