"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const terminalLines = [
  "Initializing Alg Protocol...",
  "Loading cognitive models [v4.1.2]",
  "Establishing secure connection to Quantum Edge",
  "Bypassing standard latency constraints",
  "Injecting capital into Node 0x93FA",
  "Boot sequence completed.",
  "Warning: High volume of data expected.",
  "Access Granted."
];

export default function Terminal() {
  const container = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: "top 80%",
      onEnter: () => {
        let currentLine = 0;
        const interval = setInterval(() => {
          if (currentLine < terminalLines.length) {
            setLines(prev => [...prev, terminalLines[currentLine]]);
            currentLine++;
          } else {
            clearInterval(interval);
          }
        }, 150);
      },
      once: true
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-4 md:px-12 bg-black border-b border-[var(--line)]">
      <div className="max-w-screen-xl mx-auto">
        <div className="glass-panel p-6 border border-[var(--line)] font-[var(--font-space-grotesk)] text-xs md:text-sm tracking-widest leading-loose">
          <div className="text-[var(--accent)] mb-4 uppercase">
            // sys_terminal.exe active
          </div>
          {lines.map((line, i) => (
            <div key={i} className="text-zinc-500 typewriter-line">
              <span className="text-white mr-4">&gt;</span> {line}
            </div>
          ))}
          <div className="animate-pulse inline-block w-2 h-4 bg-white mt-1" />
        </div>
      </div>
    </section>
  );
}
