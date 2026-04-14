"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Hero", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "AI", href: "#ai" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(10,15,28,0)", "rgba(10,15,28,0.95)"]);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-cyan-500/10"
      style={{ background: bg }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick("#hero")}
          className="font-mono font-bold text-lg text-white tracking-widest hover:text-cyan-400 transition-colors"
        >
          KW<span className="text-cyan-400">.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-mono tracking-wider text-slate-400 hover:text-cyan-400 transition-colors uppercase"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleClick("#contact")}
            className="px-4 py-2 text-xs font-mono tracking-widest uppercase border border-cyan-400/50 text-cyan-400 rounded hover:bg-cyan-400/10 transition-all"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden glass border-t border-cyan-500/10 px-6 py-4 flex flex-col gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-mono tracking-wider text-slate-400 hover:text-cyan-400 transition-colors uppercase text-left"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
