"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((m) => m.Canvas),
  { ssr: false }
);
const SkillsHexGrid = dynamic(() => import("@/components/three/SkillsHexGrid"), { ssr: false });

const skillCategories = [
  {
    label: "Backend",
    color: "text-amber-400",
    border: "border-amber-400/30",
    glow: "#f59e0b",
    skills: resumeData.skills.backend,
  },
  {
    label: "Frontend",
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    glow: "#00ffff",
    skills: resumeData.skills.frontend,
  },
  {
    label: "AI & LLM",
    color: "text-pink-400",
    border: "border-pink-400/30",
    glow: "#ec4899",
    skills: resumeData.skills.ai,
  },
  {
    label: "DevOps & Cloud",
    color: "text-sky-400",
    border: "border-sky-400/30",
    glow: "#0ea5e9",
    skills: resumeData.skills.devops,
  },
  {
    label: "Databases",
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    glow: "#10b981",
    skills: resumeData.skills.databases,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// Expertise"
          title="Skills & Technologies"
          subtitle="Full-stack capabilities across enterprise backend, modern frontend, cloud infrastructure, and cutting-edge AI systems."
          accent="purple"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* 3D Hex grid - desktop */}
          <div className="hidden lg:block h-[400px] rounded-xl overflow-hidden glass border border-purple-500/20">
            <Canvas camera={{ position: [0, 2, 5], fov: 60 }} dpr={[1, 1.5]}>
              <Suspense fallback={null}>
                <SkillsHexGrid />
              </Suspense>
            </Canvas>
          </div>

          {/* Skill categories */}
          <div className="flex flex-col gap-4">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
              >
                <GlassCard className="p-5" glowColor="purple">
                  <div className={`text-xs font-mono tracking-wider mb-3 ${cat.color}`}>
                    // {cat.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className={`text-xs font-mono px-3 py-1.5 rounded border text-slate-300 ${cat.border} bg-slate-800/50 hover:text-white hover:bg-slate-700/50 transition-colors cursor-default`}
                        whileHover={{ scale: 1.05, boxShadow: `0 0 10px ${cat.glow}40` }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
