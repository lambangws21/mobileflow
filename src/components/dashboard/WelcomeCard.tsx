"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";

export default function WelcomeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-100 text-slate-900 p-6 rounded-xl shadow-md flex items-center space-x-4 h-auto"
    >
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
        {/* Placeholder Avatar */}
        <div className="text-xl font-bold">👋</div>
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-900">Welcome back,</p>
        <h2 className="text-xl font-bold">Herlmabang W.</h2>
      </div>
      <Button>View Analysis</Button>
    </motion.div>
  );
}
