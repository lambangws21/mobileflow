'use client';
import React, { useState } from 'react';

export default function UploadForm({ onUpload }: { onUpload: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert('❗ Pilih file terlebih dahulu.');

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = (reader.result as string).split(',')[1];
      const res = await fetch('/api/appscript', {
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
        alert(`✅ File "${data.fileName}" berhasil diupload!`);
        onUpload();
      } else {
        alert(`❌ Gagal: ${data.message}`);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="gap-2 p-3">
    <form onSubmit={handleSubmit} className="p-4 bg-slate-500 border rounded-lg mb-2 shadow w-full max-w-md">
      <input
        type="file"
        accept="image/*,application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={isUploading}
        className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        {isUploading ? 'Mengunggah...' : 'Unggah File'}
      </button>
    </form>
    </div>
  );
}
