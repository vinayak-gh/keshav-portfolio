"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

const models = [
  { name: "GPT-4/5", color: "#10a37f", desc: "OpenAI" },
  { name: "Claude", color: "#e06c21", desc: "Anthropic" },
  { name: "Gemini", color: "#4285f4", desc: "Google" },
];

export default function AIExperience() {
  return (
    <section id="ai" className="section-padding relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-600/8 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="// AI Systems"
          title="AI & Automation Experience"
          subtitle="2+ years working with LLMs, AI agents, and agentic workflows — building intelligent systems that scale."
          accent="purple"
        />

        {/* Hero AI stat banner */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { value: "2+", label: "Years AI Experience", color: "text-purple-400" },
            { value: "3", label: "LLM Providers Used", color: "text-pink-400" },
            { value: "100%", label: "Content Ops Automated", color: "text-cyan-400" },
          ].map((s) => (
            <GlassCard key={s.label} className="p-6 text-center" glowColor="purple">
              <div className={`text-3xl font-black mb-2 ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-400 font-mono tracking-wider">{s.label}</div>
            </GlassCard>
          ))}
        </motion.div>

        {/* AI experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {resumeData.aiExperience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-6 h-full" glowColor="purple">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Models used */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8">
            <div className="text-xs font-mono text-purple-400 mb-6 tracking-wider">// LLM MODELS INTEGRATED</div>
            <div className="grid grid-cols-3 gap-6">
              {models.map((m) => (
                <div key={m.name} className="text-center">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center border-2 text-white font-bold text-sm"
                    style={{ borderColor: m.color, boxShadow: `0 0 20px ${m.color}40`, background: `${m.color}15` }}
                  >
                    {m.name.slice(0, 2)}
                  </div>
                  <div className="font-semibold text-white text-sm">{m.name}</div>
                  <div className="text-xs text-slate-500">{m.desc}</div>
                </div>
              ))}
            </div>

            {/* Toolisky AI callout */}
            <div className="mt-8 p-4 rounded-xl border border-purple-500/30 bg-purple-500/5">
              <div className="text-xs font-mono text-purple-400 mb-2">// APPLIED IN TOOLISKY</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Built a complete LLM-powered admin system that automates content formatting, SEO metadata generation, and tool copy production — 
                replacing all manual content operations. Used AI agents throughout the dev lifecycle to accelerate feature delivery by 3–5×.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
