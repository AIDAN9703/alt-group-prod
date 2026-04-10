"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      delay: 2.8 // Boot sequence delay
    });
  }, { scope: navRef });

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-[9990] w-full max-w-[1400px] px-4">
      <div className="flex items-center justify-between px-6 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">

        <Link href="/" className="flex flex-col items-center justify-center hover-target cursor-pointer group">
          <div className="flex items-baseline relative">
            <span className="text-[28px] font-[var(--font-rajdhani)] font-bold text-[var(--accent)] leading-none">A</span>
            <span className="text-[22px] font-[var(--font-rajdhani)] font-bold text-white tracking-[0.1em] leading-none">LG GROUP</span>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-[2px] bg-[var(--accent)] group-hover:w-[110%] transition-all duration-500 ease-out"></div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-[var(--font-space-grotesk)] text-xs uppercase tracking-widest text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors hover-target">Entities</Link>
          <Link href="/work" className="hover:text-white transition-colors hover-target">Our Work</Link>
          <Link href="/about" className="hover:text-white transition-colors hover-target">About Us</Link>
        </div>

        <div className="hover-target cursor-pointer text-[var(--accent)] font-[var(--font-rajdhani)] uppercase tracking-widest text-xs border border-[var(--accent)] px-4 py-2 rounded-full hover:bg-[var(--accent)] hover:text-black transition-all">
          Connect
        </div>
      </div>
    </nav>
  );
}
