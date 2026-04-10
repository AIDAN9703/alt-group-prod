"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const caseStudies = [
  {
    client: "CONFIDENTIAL",
    title: "Project Obsidian",
    techStack: ["PyTorch", "CUDA", "Rust", "TensorRT", "gRPC"],
    desc: "A sprawling neural topology network replacing heuristic models for global supply chain optimization. The model predicts geopolitical and meteorological disruption before standard logic circuits can parse the data, acting entirely on instinctual data weights.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
  },
  {
    client: "NEXUS CAPITAL",
    title: "Algorithmic HFT Pipeline",
    techStack: ["C++20", "FPGA", "KDB+", "Linux RT", "ZeroMQ"],
    desc: "Built a sub-millisecond network architecture to execute high-frequency trades faster than physical distance typically allows. We achieved this by deploying proprietary edge-compute nodes running highly tuned C++ and FPGA hardware.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
  },
  {
    client: "GLOBAL REACH",
    title: "Autonomous Thermal Regulation",
    techStack: ["Go", "Kubernetes", "Prometheus", "TensorFlow", "React"],
    desc: "We integrated an AI-directed cooling logic into one of the world's largest data centers, shifting compute workloads geo-spatially ahead of the sun in real-time to drastically minimize thermal demands and output.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
  }
];

export default function WorkPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Advanced Header Animation
    const hl = gsap.timeline();
    
    hl.to(".header-glitch", {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.1,
      delay: 0.2 // Soft navigation delay
    });

    gsap.to(".header-bg-grid", {
      scrollTrigger: {
        trigger: ".work-header",
        start: "top top",
        end: "bottom top",
        scrub: 1
      },
      scale: 1.5,
      y: 200,
      opacity: 0,
    });

    // Case Studies Parallax & Clip Path Reveal
    const sections = gsap.utils.toArray(".study-section");
    sections.forEach((section: any) => {
      const img = section.querySelector(".study-img");
      const content = section.querySelector(".study-content");
      
      // Image Parallax + Clip Path
      const imageTrigger = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom top",
          scrub: 1
        }
      });
      
      imageTrigger.fromTo(img.parentElement, 
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5, ease: "none" }
      ).fromTo(img,
        { scale: 1.3, y: -50 },
        { scale: 1, y: 50, duration: 1, ease: "none" },
        0
      );

      // Content Stagger Reveal
      gsap.fromTo(content.children, 
        { autoAlpha: 0, y: 50 }, 
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: content,
            start: "top 75%",
          }
        }
      );
    });

  }, { scope: container });

  return (
    <main ref={container} className="flex min-h-screen flex-col overflow-x-hidden selection:bg-[var(--foreground)] selection:text-[var(--background)] bg-black">
      
      {/* Radical Redesign Header */}
      <section className="work-header relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden border-b border-[var(--line)]">
        
        {/* 3D Grid Plane Background */}
        <div className="header-bg-grid absolute bottom-[-50%] left-[-50%] w-[200%] h-[200%] pointer-events-none opacity-40 z-0 mix-blend-screen" style={{ perspective: "1000px" }}>
          <div className="w-full h-full transform [transform:rotateX(75deg)]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[size:100px_100px] animate-[slide_10s_linear_infinite]" />
            <div className="absolute inset-0 bg-[linear-gradient(var(--accent)_1px,transparent_1px),linear-gradient(90deg,var(--accent)_1px,transparent_1px)] bg-[size:300px_300px] animate-[slide_20s_linear_infinite_reverse] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col pt-32">
          <div className="overflow-hidden">
            <div className="font-[var(--font-space-grotesk)] text-[var(--accent)] tracking-[0.4em] uppercase text-sm mb-6 header-glitch opacity-0 translate-y-20 [transform:rotateX(-90deg)] font-bold">
              // Encrypted Archive
            </div>
          </div>
          
          <div className="overflow-hidden">
            <h1 className="header-glitch opacity-0 translate-y-32 [transform:rotateX(-45deg)] font-[var(--font-rajdhani)] text-[12vw] md:text-[8vw] font-bold uppercase tracking-tighter text-white leading-[0.85] select-none mix-blend-difference">
              ARCHITECTING
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="header-glitch opacity-0 translate-y-32 [transform:rotateX(-45deg)] font-[var(--font-rajdhani)] text-[12vw] md:text-[8vw] font-bold uppercase tracking-tighter text-transparent leading-[0.85] select-none" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>
              THE FUTURE
            </h1>
          </div>
          <div className="overflow-hidden">
             <div className="font-[var(--font-space-grotesk)] text-zinc-400 max-w-xl mt-12 header-glitch opacity-0 text-lg md:text-xl leading-relaxed">
               Case studies detailing our deployment of massive-scale intelligence frameworks and bleeding-edge digital infrastructure.
             </div>
          </div>
        </div>
      </section>

      {/* Borderless Case Study Sections */}
      <section className="bg-black relative z-10">
        <div className="flex flex-col">
          {caseStudies.map((study, i) => (
            <div key={i} className={`study-section relative min-h-screen flex flex-col md:flex-row items-center border-b border-[rgba(255,255,255,0.05)] ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Massive Image Side */}
              <div className="w-full md:w-1/2 h-[60vh] md:h-screen bg-black overflow-hidden relative">
                <img 
                  src={study.img} 
                  alt={study.title} 
                  className="study-img w-full h-[120%] object-cover object-center grayscale opacity-60 mix-blend-screen"
                />
                {/* Gradient fade to blend harsh edges into the void */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 pointer-events-none" />
              </div>

              {/* Content Side */}
              <div className="study-content w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center bg-black">
                
                <div className="font-[var(--font-space-grotesk)] text-[var(--accent)] tracking-[0.2em] font-bold uppercase text-xs mb-8 flex items-center gap-4 filter drop-shadow-[0_0_8px_rgba(255,42,42,0.5)]">
                  <span className="w-8 h-[1px] bg-[var(--accent)]" />
                  CLIENT // {study.client}
                </div>

                <h2 className="font-[var(--font-rajdhani)] text-5xl md:text-7xl font-bold uppercase text-white mb-10 leading-[0.9] hover-target">
                  {study.title}
                </h2>

                <p className="font-[var(--font-space-grotesk)] text-zinc-300 text-lg md:text-xl leading-relaxed mb-12">
                  {study.desc}
                </p>

                {/* Tech Stack List - Raw brutalist text format */}
                <div className="mb-16">
                  <div className="font-[var(--font-rajdhani)] uppercase text-xs text-white/40 tracking-widest mb-4">Core Tech Stack:</div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 font-[var(--font-space-grotesk)] text-sm uppercase text-white tracking-widest">
                    {study.techStack.map((tech, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2">
                        <span className="text-[var(--accent)] opacity-50">+</span> {tech}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
