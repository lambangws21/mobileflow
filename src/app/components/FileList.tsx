'use client';
import React, { useEffect, useState } from 'react';

interface FileData {
  fileName: string;
  fileUrl: string;
  fileType: string;
  fileSize: number;
  createdDate: string;
}

export default function FileList() {
  const [files, setFiles] = useState<FileData[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch('/api/appscript');
      const data = await res.json();
      if (data.status === 'success') setFiles(data.files || []);
    };
    fetchFiles();
  }, []);

  return (
    <div className="mt-8 w-full max-w-4xl border rounded-lg shadow p-4 ">
      <h2 className="text-xl font-semibold text-center mb-4">📂 Daftar File Lengkap</h2>
      <table className="min-w-full bg-slate-400 rounded-lg border">
        <thead>
          <tr>
            <th className="p-2 border">Nama File</th>
            <th className="p-2 border text-yellow-300 w-32">Link File</th>
            <th className="p-2 border">Tipe File</th>
            <th className="p-2 border">Ukuran (bytes)</th>
            <th className="p-2 border w-48">Tanggal Dibuat</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td className="p-2 border">{file.fileName}</td>
              <td className="p-2 border">
                <a href={file.fileUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-200 text-balance underline">
                  Lihat File
                </a>
              </td>
              <td className="p-2 border">{file.fileType}</td>
              <td className="p-2 border">{file.fileSize}</td>
              <td className="p-2 border">{new Date(file.createdDate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
