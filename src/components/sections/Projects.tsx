"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/data/resume";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";

const colorMap: Record<string, string> = {
  "#00ffff": "text-cyan-400 border-cyan-400/30 bg-cyan-400/5",
  "#7c3aed": "text-purple-400 border-purple-400/30 bg-purple-400/5",
  "#06b6d4": "text-sky-400 border-sky-400/30 bg-sky-400/5",
  "#10b981": "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
};

const glowMap: Record<string, "cyan" | "purple" | "blue" | "green"> = {
  "#00ffff": "cyan",
  "#7c3aed": "purple",
  "#06b6d4": "cyan",
  "#10b981": "green",
};

export default function Projects() {
  const [selected, setSelected] = useState<string | null>("toolisky");

  const selectedProject = resumeData.projects.find((p) => p.id === selected);

  return (
    <section id="projects" className="section-padding relative grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// Portfolio"
          title="Featured Projects"
          subtitle="Real-world systems delivering enterprise-grade solutions across fintech, logistics, manufacturing, and SaaS."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Project list */}
          <div className="flex flex-col gap-4">
            {resumeData.projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard
                  glowColor={glowMap[project.color]}
                  onClick={() => setSelected(project.id)}
                  className={`p-5 ${selected === project.id ? "border-cyan-400/60 bg-cyan-500/5" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-3 h-3 rounded-full mt-1 flex-shrink-0 animate-pulse-glow"
                      style={{ background: project.color, boxShadow: `0 0 10px ${project.color}` }}
                    />
                    <div>
                      <div className="font-bold text-white mb-1">{project.name}</div>
                      <div className="text-xs text-slate-400 mb-2">{project.tagline}</div>
                      <div className="flex flex-wrap gap-1">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded border ${colorMap[project.color]}`}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="text-[10px] text-slate-500">+{project.stack.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {selectedProject && (
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="p-8 h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-xs font-mono tracking-wider text-slate-500 mb-1">
                          {selectedProject.domain}
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h3>
                        <p className="text-slate-400">{selectedProject.tagline}</p>
                      </div>
                      <div
                        className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{ background: selectedProject.color, boxShadow: `0 0 20px ${selectedProject.color}` }}
                      />
                    </div>

                    {/* Problem / Impact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="glass p-4 rounded-lg border border-red-500/20">
                        <div className="text-xs font-mono text-red-400 mb-2">// PROBLEM</div>
                        <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.problem}</p>
                      </div>
                      <div className="glass p-4 rounded-lg border border-emerald-500/20">
                        <div className="text-xs font-mono text-emerald-400 mb-2">// IMPACT</div>
                        <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.impact}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <div className="text-xs font-mono text-cyan-400 mb-3">// HIGHLIGHTS</div>
                      <ul className="flex flex-col gap-2">
                        {selectedProject.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                            <span className="text-cyan-400 mt-1 flex-shrink-0">›</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack */}
                    <div className="mb-6">
                      <div className="text-xs font-mono text-purple-400 mb-3">// TECH STACK</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs font-mono px-3 py-1 rounded border ${colorMap[selectedProject.color]}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    {selectedProject.url && (
                      <NeonButton href={selectedProject.url} variant="primary">
                        Visit Live Site ↗
                      </NeonButton>
                    )}
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
