"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import DashboardCard from "@/components/dashboard/DashboardCard";
import ChartCard from "@/components/dashboard/ChartCard";
import CreditCard from "@/components/dashboard/CreditCategories";
import TransactionList from "@/components/dashboard/TransactionList";
import LoanCalculator from "@/components/dashboard/LoanCalculator";
import TransactionTable from "@/components/dashboard/TransactionTable";


export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-20 w-full">
        <Header />
        <main className="p-10 grid grid-cols-3 gap-6 md:grid-cols-3">
          <DashboardCard />
          <ChartCard />
          <TransactionList />
          <CreditCard />
          <LoanCalculator />
          <TransactionTable />
        </main>
      </div>
    </div>
  );
}
