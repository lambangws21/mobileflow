'use client';
import React, { useState } from 'react';
import UploadForm from '@/app/components/sheets-pre/UploadForm';
import ListData from '@/app/components/sheets-pre/ListData';

export default function Home() {
  const [refresh, setRefresh] = useState(false);
  const handleUpload = () => setRefresh(!refresh);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-500 p-4">
      <h1 className="text-2xl font-bold mb-4">📤 Form Upload & 📄 Daftar Data (Sheet1)</h1>
      <UploadForm onUpload={handleUpload} />
      <ListData key={refresh.toString()} />
    </main>
  );
}
