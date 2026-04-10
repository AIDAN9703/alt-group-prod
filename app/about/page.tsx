"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".page-title", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out", stagger: 0.2, delay: 0.5 }
    ).fromTo(".content-block",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.1 },
      "-=0.5"
    );

    gsap.fromTo(".founder-card",
      { opacity: 0, scale: 0.95 },
      { 
        opacity: 1, scale: 1, 
        duration: 0.8, 
        ease: "power2.out", 
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".founders-section",
          start: "top 70%"
        }
      }
    );
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen pt-32 bg-black flex flex-col">
      <div className="flex-1 max-w-screen-xl mx-auto px-4 md:px-12 py-12 w-full">
        <h1 className="page-title text-6xl md:text-8xl font-[var(--font-rajdhani)] font-bold uppercase text-white tracking-tighter mb-8 hover-target">
          The Genesis of <span className="text-[var(--accent)]">ALG</span>
        </h1>
        
        <div className="content-block h-[1px] w-full bg-[var(--line)] mb-12" />

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="content-block text-zinc-300 font-[var(--font-space-grotesk)] text-lg leading-relaxed">
            <p className="mb-6">
              Alg Group was forged from the collective vision of three pioneers: <strong>Alexander, Lesheim, and Gliwik</strong>. For over a decade, we have operated at the bleeding edge of Artificial Intelligence, long before the term entered the mainstream lexicon. 
            </p>
            <p>
              Our roots lie in complex systems architecture, deep learning algorithms, and high-frequency optimization engines. We saw the inefficiency in legacy enterprise—bloated processes, redundant workflows, and fragmented data pipelines—and resolved to annihilate it.
            </p>
          </div>
          <div className="content-block text-zinc-300 font-[var(--font-space-grotesk)] text-lg leading-relaxed">
             <p className="mb-6">
              We help companies drastically optimize operations, automate the repetitive, and build scalable engines of commerce. We do not just consult; we integrate. We replace outdated infrastructure with autonomous agents and sophisticated neural networks.
            </p>
            <p>
              Today, Alg Group stands as an apex force in venture ops and AI consulting. Our mission remains singular: Absolute operational dominance through intelligence.
            </p>
          </div>
        </div>

        <section className="founders-section mb-24">
          <h2 className="content-block text-4xl font-[var(--font-rajdhani)] font-bold uppercase text-white tracking-tighter mb-8 hover-target">The Architects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="founder-card border border-[var(--line)] bg-zinc-900/50 p-6 backdrop-blur-sm group hover:border-[var(--accent)] transition-colors hover-target">
              <h3 className="text-2xl font-[var(--font-rajdhani)] text-white uppercase font-bold mb-2">Alexander</h3>
              <div className="text-[var(--accent)] text-xs font-[var(--font-space-grotesk)] uppercase tracking-widest mb-4">Director of Optimization</div>
              <p className="text-zinc-400 font-[var(--font-space-grotesk)] text-sm leading-relaxed">
                Spearheading enterprise integration and workflow compression. Pushing automated supply chains to absolute synchronization.
              </p>
            </div>
            <div className="founder-card border border-[var(--line)] bg-zinc-900/50 p-6 backdrop-blur-sm group hover:border-[var(--accent)] transition-colors hover-target">
              <h3 className="text-2xl font-[var(--font-rajdhani)] text-white uppercase font-bold mb-2">Lesheim</h3>
              <div className="text-[var(--accent)] text-xs font-[var(--font-space-grotesk)] uppercase tracking-widest mb-4">Chief Cognitive Architect</div>
              <p className="text-zinc-400 font-[var(--font-space-grotesk)] text-sm leading-relaxed">
                The mind behind our proprietary LLM structures, transforming raw computational power into actionable enterprise strategy.
              </p>
            </div>
            <div className="founder-card border border-[var(--line)] bg-zinc-900/50 p-6 backdrop-blur-sm group hover:border-[var(--accent)] transition-colors hover-target">
              <h3 className="text-2xl font-[var(--font-rajdhani)] text-white uppercase font-bold mb-2">Gliwik</h3>
              <div className="text-[var(--accent)] text-xs font-[var(--font-space-grotesk)] uppercase tracking-widest mb-4">Head of Automation</div>
              <p className="text-zinc-400 font-[var(--font-space-grotesk)] text-sm leading-relaxed">
                Relentlessly eliminating operational bloat. Designing the sophisticated automated agents that replace conventional labor forces.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
