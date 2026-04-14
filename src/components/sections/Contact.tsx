"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";
import { resumeData } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative grid-bg">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gradient-to-t from-cyan-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="// Connect"
          title="Let's Build Something Scalable"
          subtitle="Open to full-time roles, freelance systems architecture, or AI product collaboration."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GlassCard className="p-10 text-center" glowColor="cyan">
            {/* Contact details */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
              <NeonButton href={`mailto:${resumeData.email}`} variant="primary">
                ✉ {resumeData.email}
              </NeonButton>
              <NeonButton href={`tel:${resumeData.phone}`} variant="secondary">
                ☎ {resumeData.phone}
              </NeonButton>
              <NeonButton href={`https://${resumeData.website}`} variant="outline">
                🌐 {resumeData.website}
              </NeonButton>
            </div>

            {/* Location */}
            <p className="text-slate-500 font-mono text-sm mb-10">
              📍 {resumeData.location} · Available for remote &amp; on-site
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-10" />

            {/* Tagline */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to build the next generation of{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                scalable systems?
              </span>
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto">
              Whether it&apos;s a high-throughput backend, an AI-powered feature, or a full-stack product — let&apos;s make it happen.
            </p>

            <NeonButton href={`mailto:${resumeData.email}`} variant="primary" className="text-base px-8 py-4">
              Send me a message →
            </NeonButton>
          </GlassCard>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-16 text-slate-600 font-mono text-xs">
          <p>Built with Next.js · Three.js · Framer Motion · Tailwind CSS</p>
          <p className="mt-2">© {new Date().getFullYear()} Keshav Wadwale · Pune, India</p>
        </div>
      </div>
    </section>
  );
}
