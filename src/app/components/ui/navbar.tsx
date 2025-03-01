"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow p-4 flex justify-between items-center"
    >
      <div>
        <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Cari..."
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="relative">
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
