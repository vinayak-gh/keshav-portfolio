"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setShow(false), 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#0a0f1c" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Animated logo */}
            <motion.div
              className="w-20 h-20 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full" />
              <div className="absolute inset-2 border-2 border-cyan-400/60 rounded-full" />
              <div className="absolute inset-4 border-2 border-cyan-400 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-xl font-mono">KW</span>
              </div>
            </motion.div>

            {/* Name */}
            <div className="text-center">
              <motion.div
                className="text-2xl font-bold tracking-widest text-white mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                KESHAV WADWALE
              </motion.div>
              <motion.div
                className="text-xs tracking-[0.3em] text-cyan-400 font-mono uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Initializing Portfolio...
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-0.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Progress text */}
            <div className="font-mono text-xs text-slate-500">
              {Math.min(Math.round(progress), 100)}% — Loading 3D assets
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
