"use client";

export default function LoanCalculator() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold">Loan Calculator</h3>
      <p className="text-gray-500 text-sm">Select amount and period</p>
      <div className="mt-4 bg-blue-100 p-4 rounded-lg text-center">
        <p className="text-xl font-bold">$450.50</p>
        <p className="text-xs">All loan amount</p>
      </div>
    </div>
  );
}
