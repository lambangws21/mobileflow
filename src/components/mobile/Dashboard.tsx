"use client";

import DashboardLayout from '@/layout/DashboardLayout';
import { Header } from '@/components/mobile/Header';
import { Sidebar } from '@/components/mobile/Sidebar';
import ProfileCard from '@/components/mobile/ProfileCard';
import TournamentCard from '@/components/mobile/TournamentCard';
import StatsGrid from '@/components/mobile/StatsGrid';
import TransactionTable  from '@/components/mobile/TransactionTable';
import { fetchDashboardData } from '@/lib/mobile';
import { DashboardData } from '@/types/mobile';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const result = await fetchDashboardData();
      setData(result);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (!data) return <div className="h-screen flex items-center justify-center">Failed to load data</div>;

  return (
    <DashboardLayout>
      <Header />
      <div className="p-4 space-y-4 pb-24">
        <ProfileCard profile={data.profile} />
        <TournamentCard tournament={data.tournament} />
        <StatsGrid stats={data.stats} />
        <div className="p-4 bg-white rounded-xl shadow-sm">
          <p className="font-semibold text-slate-800 mb-2">Transaction History</p>
          <TransactionTable transactions={data.transactions} />
        </div>
      </div>
      <Sidebar />
    </DashboardLayout>
  );
}
