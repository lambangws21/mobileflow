"use client";

import React from 'react';
import Sidebar from '@/app/components/ui/sidebar';
import Navbar from '@/app/components/ui/navbar';
import { motion } from 'framer-motion';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="p-6 bg-gray-100 overflow-auto flex-1"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default DashboardLayout;
