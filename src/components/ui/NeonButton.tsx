"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function NeonButton({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
}: NeonButtonProps) {
  const variants = {
    primary: "bg-cyan-500/20 border-cyan-400 text-cyan-300 hover:bg-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]",
    secondary: "bg-purple-500/20 border-purple-400 text-purple-300 hover:bg-purple-500/40 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]",
    outline: "bg-transparent border-slate-500 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]",
  };

  const baseClass = `inline-flex items-center gap-2 px-6 py-3 rounded-lg border font-medium text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-sm ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
