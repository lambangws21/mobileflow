"use client";

import Link from "next/link";
import { Home, Send, List, TrendingUp, Settings } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { path: "/", label: "Dashboard", icon: Home },
  { path: "/transfer", label: "Transfer", icon: Send },
  { path: "/transactions", label: "Transactions", icon: List },
  { path: "/analytics", label: "Analytics", icon: TrendingUp },
  { path: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.9 }}
      className="fixed shadow-lg w-80 h-auto max-h-[80rem] bg-gradient-to-b from-slate-600 to-indigo-700 text-white p-8 rounded-2xl mt-20 ml-20 overflow-y-auto"
      aria-label="Sidebar Navigation"
    >
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-bold">MyBank</h1>
      </header>

      <nav>
        <ul className="space-y-20">
          {menuItems.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <Link href={path} legacyBehavior>
                <a className="flex flex-col items-center p-4 rounded-xl hover:bg-indigo-600 transition-all cursor-pointer">
                  <Icon className="w-8 h-8" />
                  <span className="flex-1 text-center text-xl">{label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
}
