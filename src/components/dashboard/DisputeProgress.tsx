"use client";

export default function DisputeProgress() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
      <h3 className="text-lg font-semibold">Dispute Progress</h3>
      <div className="w-full h-32 bg-gradient-to-r from-purple-200 to-purple-400 rounded-lg"></div>
      <div className="flex justify-between text-sm">
        <p className="text-red-500">30 dispute</p>
        <p className="text-blue-500">25% resolved</p>
      </div>
    </div>
  );
}
