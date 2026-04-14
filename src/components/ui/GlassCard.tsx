"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "blue" | "green";
  hover?: boolean;
  onClick?: () => void;
}

const glowMap = {
  cyan: "hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:border-cyan-400/60",
  purple: "hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:border-purple-400/60",
  blue: "hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:border-blue-400/60",
  green: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:border-green-400/60",
};

export default function GlassCard({
  children,
  className = "",
  glowColor = "cyan",
  hover = true,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`glass border border-cyan-500/20 rounded-xl transition-all duration-300 ${hover ? glowMap[glowColor] : ""} ${onClick ? "cursor-pointer" : ""} ${className}`}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
