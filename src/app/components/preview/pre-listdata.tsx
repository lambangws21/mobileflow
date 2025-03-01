'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DataRow {
  no: number;
  date: string;
  jenisBiaya: string;
  keterangan: string;
  jumlah: number;
  klaimOleh: string;
  status: string;
}

export default function ListData() {
  const [dataList, setDataList] = useState<DataRow[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/get-data');
      const data = await res.json();
      if (data.status === 'success') setDataList(data.data || []);
    };
    fetchData();
  }, []);

  return (
    <motion.div className="mt-8 w-full max-w-5xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <h2 className="text-xl font-semibold text-center mb-4">📋 Daftar Data (Sheet1)</h2>
      <table className="min-w-full bg-white rounded-lg border p-2">
        <thead>
          <tr>
            {['NO', 'DATE', 'JENIS BIAYA', 'KETERANGAN', 'JUMLAH (Rp)', 'KLAIM OLEH', 'STATUS'].map((header) => (
              <th key={header} className="p-2 border">{header}</th>
            ))}
          </tr>
        </thead>
        <motion.tbody initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          {dataList.map((item, index) => (
            <motion.tr key={index} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <td className="p-2 border text-center">{item.no}</td>
              <td className="p-2 border text-center">{item.date}</td>
            </motion.tr>
          ))}
        </motion.tbody>
      </table>
    </motion.div>
  );
}
