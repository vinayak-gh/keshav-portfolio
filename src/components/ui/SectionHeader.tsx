"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  accent?: "cyan" | "purple";
}

export default function SectionHeader({ label, title, subtitle, accent = "cyan" }: SectionHeaderProps) {
  const accentClass = accent === "cyan" ? "text-cyan-400 border-cyan-400/40" : "text-purple-400 border-purple-400/40";
  const gradientClass = accent === "cyan"
    ? "from-cyan-400 via-blue-400 to-purple-400"
    : "from-purple-400 via-blue-400 to-cyan-400";

  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className={`text-xs font-mono tracking-[0.3em] uppercase border px-4 py-1.5 rounded-full ${accentClass} mb-6 inline-block`}>
        {label}
      </span>
      <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent mt-4 mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
