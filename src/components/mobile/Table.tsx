'use client';

import React, { useEffect, useState } from 'react';
import { Transaction, TransactionResponse } from '@/types/transaction';

export default function DataTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/get-data');
        if (!response.ok) {
          throw new Error(`Gagal fetch data, status: ${response.status}`);
        }

        const result: TransactionResponse = await response.json();

        if (result.status === 'success') {
          setTransactions(result.data);
        } else {
          setError(result.message || 'Gagal memuat data.');
        }
      } catch (err) {
        setError((err as Error).message);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <p className="text-red-500 text-center">❌ {error}</p>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold text-center mb-4">📋 Daftar Transaksi</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-100">
            <th className="p-2 text-left text-slate-800">Date</th>
            <th className="p-2 text-left text-slate-800">Jenis Biaya</th>
            <th className="p-2 text-left text-slate-800">Keterangan</th>
            <th className="p-2 text-left text-slate-800">Jumlah (Rp)</th>
            <th className="p-2 text-left text-slate-800">Klaim Oleh</th>
            <th className="p-2 text-left text-slate-800">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.no} className="border-b">
              <td className="p-2 text-slate-600">{item.date}</td>
              <td className="p-2 text-slate-600">{item.jenisBiaya}</td>
              <td className="p-2 text-slate-600">{item.keterangan}</td>
              <td className="p-2 text-slate-600">{`Rp${item.jumlah.toLocaleString()}`}</td>
              <td className="p-2 text-slate-600">{item.klaimOleh}</td>
              <td className="p-2 text-slate-600">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
