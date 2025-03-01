'use client';
import React, { useState } from 'react';

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert('Pilih file terlebih dahulu.');

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = (reader.result as string).split(',')[1];
      const res = await fetch('/api/uploads', {
        method: 'POST',
        body: JSON.stringify({
          fileName: file.name,
          fileBase64: base64String,
          mimeType: file.type,
        }),
      });

      const data = await res.json();
      setIsUploading(false);
      if (data.status === 'success') {
        alert('✅ Berhasil diupload!');
      } else {
        alert(`❌ Gagal: ${data.message}`);
      }
      
      window.location.reload(); // Refresh otomatis setelah upload
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-500 rounded shadow w-full max-w-md space-y-3">
      <input
        type="file"
        accept="image/*,application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={isUploading}
        className="w-full bg-blue-500 text-slate-100 py-2 rounded hover:bg-blue-600 transition"
      >
        {isUploading ? 'Mengunggah...' : 'Unggah File'}
      </button>
    </form>
  );
}
