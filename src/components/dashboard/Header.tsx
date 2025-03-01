"use client";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-5 px-10 bg-white shadow-md">
      <h1 className="text-2xl font-bold">My Dashboard 🚀</h1>
      <input
        type="search"
        placeholder="Search everything..."
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
      />
    </header>
  );
}
