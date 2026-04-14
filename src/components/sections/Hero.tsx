"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";
import NeonButton from "@/components/ui/NeonButton";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((m) => m.Canvas),
  { ssr: false }
);
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), { ssr: false });

function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Mobile fallback: static gradient background
function HeroFallback() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-900/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* 3D canvas - hidden on very small screens */}
      <div className="hidden sm:block">
        <HeroCanvas />
      </div>
      <HeroFallback />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[#0a0f1c]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0a0f1c]/60 via-transparent to-[#0a0f1c]/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-xs font-mono tracking-[0.3em] uppercase border border-cyan-400/40 text-cyan-400 px-4 py-2 rounded-full bg-cyan-400/5">
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Keshav
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Wadwale
            </span>
          </h1>
        </motion.div>

        {/* Headline */}
        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-4 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Building Scalable Systems + AI Products
        </motion.p>

        {/* Sub */}
        <motion.p
          className="text-sm md:text-base text-slate-500 mb-10 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Java Full Stack Developer • AI-Assisted Product Builder • Pune, India
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <NeonButton variant="primary" onClick={() => scrollTo("#projects")}>
            View Projects
          </NeonButton>
          <NeonButton variant="secondary" onClick={() => scrollTo("#contact")}>
            Contact Me
          </NeonButton>
          <NeonButton variant="outline" href="https://toolisky.com" >
            Toolisky.com ↗
          </NeonButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { value: "4+", label: "Years Backend" },
            { value: "2+", label: "Years AI/LLM" },
            { value: "25+", label: "Tools on Toolisky" },
            { value: "4", label: "Enterprise Projects" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-xs text-slate-500 font-mono tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-slate-500 tracking-widest">SCROLL</span>
          <motion.div
            className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
