"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="p-4 text-center font-bold text-lg text-slate-800 bg-white shadow-sm rounded-b-3xl"
    >
      My Dashboard 
    </motion.header>
  );
}
