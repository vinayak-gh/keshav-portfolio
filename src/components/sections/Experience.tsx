"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/data/resume";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);
  const [activeProject, setActiveProject] = useState(0);

  const exp = resumeData.experience[activeExp];

  return (
    <section id="experience" className="section-padding relative grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// Career"
          title="Work Experience"
          subtitle="Enterprise systems across fintech, logistics, and manufacturing with a focus on scalable backends and real-time data pipelines."
        />

        {/* Timeline selector */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
          {resumeData.experience.map((e, i) => (
            <motion.button
              key={e.company}
              onClick={() => { setActiveExp(i); setActiveProject(0); }}
              className={`relative px-6 py-4 rounded-xl border text-left transition-all duration-300 ${
                activeExp === i
                  ? "border-cyan-400/60 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,255,255,0.2)]"
                  : "border-slate-700/50 bg-slate-800/30 hover:border-cyan-400/30"
              }`}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${e.current ? "bg-emerald-400 shadow-[0_0_8px_#10b981]" : "bg-slate-500"}`}
                />
                <div>
                  <div className="font-bold text-white text-sm">{e.company}</div>
                  <div className="text-xs text-slate-400">{e.period}</div>
                </div>
              </div>
              {e.current && (
                <span className="absolute top-2 right-3 text-[9px] font-mono tracking-widest text-emerald-400 border border-emerald-400/40 px-2 py-0.5 rounded-full">
                  CURRENT
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-8">
              {/* Company header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 mb-1">{exp.role}</div>
                  <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                  <p className="text-sm text-slate-400 mt-1">{exp.location} · {exp.period}</p>
                </div>
              </div>

              {/* Project tabs */}
              {exp.projects.length > 1 && (
                <div className="flex gap-3 mb-6 flex-wrap">
                  {exp.projects.map((p, pi) => (
                    <button
                      key={p.name}
                      onClick={() => setActiveProject(pi)}
                      className={`text-xs font-mono px-4 py-2 rounded-lg border transition-all ${
                        activeProject === pi
                          ? "border-cyan-400/60 text-cyan-400 bg-cyan-400/10"
                          : "border-slate-600 text-slate-400 hover:border-slate-400"
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              )}

              {/* Project detail */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-cyan-300 font-semibold">{exp.projects[activeProject].name}</span>
                      <span className="text-xs text-slate-500 border border-slate-600 px-2 py-0.5 rounded-full font-mono">
                        {exp.projects[activeProject].domain}
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {exp.projects[activeProject].bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: bi * 0.05 }}
                      >
                        <span className="text-cyan-400 mt-0.5 flex-shrink-0">›</span>
                        <span className="text-slate-300 text-sm leading-relaxed">{b}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech highlights */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Kafka", "Spring Boot", "Java", "Azure", "Agile"].map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded border border-cyan-400/20 text-cyan-400/70 bg-cyan-400/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
