"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-black heading-font text-white"
            >
              SYSTEM<span className="text-accent">_INIT</span>
            </motion.div>
            <motion.div
              className="h-1 bg-accent w-0"
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <div className="text-xs tracking-widest text-white/50 uppercase mt-4">
              Loading Core Modules...
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
