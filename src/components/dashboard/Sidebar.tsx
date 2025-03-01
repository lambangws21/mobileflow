"use client";

import { Home, CreditCard, BarChart, User, Settings } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { icon: Home, label: "Dashboard" },
  { icon: CreditCard, label: "Transactions" },
  { icon: BarChart, label: "Analytics" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
      className="w-20 h-screen bg-gradient-to-b from-purple-600 to-indigo-700 text-white flex flex-col items-center py-10 space-y-6 fixed left-0 top-0"
    >
      {menuItems.map(({ icon: Icon, label }) => (
        <motion.div
          key={label}
          whileHover={{ scale: 1.2 }}
          className="p-3 rounded-full bg-white/20 cursor-pointer"
        >
          <Icon className="w-6 h-6" />
        </motion.div>
      ))}
    </motion.div>
  );
}
