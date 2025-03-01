"use client";

export default function CreditCategories() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-lg font-semibold">Credit by Categories</h3>
      <div className="space-y-2">
        <div className="bg-blue-100 p-4 rounded-lg">Installment - $240</div>
        <div className="bg-gray-100 p-4 rounded-lg">Other Loans - $20</div>
      </div>
    </div>
  );
}
