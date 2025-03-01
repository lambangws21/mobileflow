'use client';
import React, { useEffect, useState } from 'react';
import {EyeIcon} from "lucide-react";

interface FileData {
  fileName: string;
  fileUrl: string;
}

export default function FileList() {
  const [files, setFiles] = useState<FileData[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch('/api/uploads');
      const data = await res.json();
      if (data.status === 'success') setFiles(data.files || []);
    };
    fetchFiles();
  }, []);

  return (
    <div className="mt-8 w-full max-w-2xl">
      <h2 className="text-xl font-semibold text-center mb-4">📂 Daftar File</h2>
      {files.length > 0 ? (
        files.map((file, index) => (
          <div key={index} className="p-3 border rounded-xl shadow bg-gray-500 flex justify-between items-center mb-3 ">
            <span>{file.fileName}</span>
            <a href={file.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-100 rounded-lg hover:bg-yellow-300 hover:rounded-full text-center transition duration-300 hover:text-black underline">
              <EyeIcon />
            </a>
          </div>
        ))
      ) : (
        <p className="text-center">Belum ada file.</p>
      )}
    </div>
  );
}
