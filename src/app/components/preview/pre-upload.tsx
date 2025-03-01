'use client';
import { LoaderCircle, PanelTopCloseIcon } from 'lucide-react';
import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function UploadForm({ onUpload }: { onUpload: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    jenisBiaya: '',
    keterangan: '',
    jumlah: '',
    klaimOleh: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => !isUploading && setIsOpen(false);

  // ✅ Reset Form setelah sukses
  const resetForm = () => {
    setFormData({
      date: '',
      jenisBiaya: '',
      keterangan: '',
      jumlah: '',
      klaimOleh: '',
    });
    setFile(null);
  };

  // ✅ Menutup modal saat klik di luar modal
  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert('❗ Pilih file terlebih dahulu.');

    setIsUploading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = (reader.result as string).split(',')[1];
      const res = await fetch('/api/uploads', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          fileName: file.name,
          fileBase64: base64String,
          mimeType: file.type,
        }),
      });

      const data = await res.json();
      setIsUploading(false);

      if (data.status === 'success') {
        toast.success(`✅ Data "${data.fileName}" berhasil diunggah!`);
        onUpload();
        resetForm();
        closeModal();
      } else {
        toast.error(`❌ Gagal: ${data.message}`);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      {/* 🔹 Tombol Buka Modal */}
      <button onClick={openModal} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        + Tambah Data
      </button>

      {/* 🔹 Modal Pop-up */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleClickOutside}>
          <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-96 relative animate-fadeIn">
            <h2 className="text-lg font-bold mb-4">📤 Tambah Data & Upload File</h2>
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-900 hover:text-red-500">
              <PanelTopCloseIcon />
            </button>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
              <input type="text" name="jenisBiaya" placeholder="Jenis Biaya" value={formData.jenisBiaya} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
              <input type="text" name="keterangan" placeholder="Keterangan" value={formData.keterangan} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
              <input type="number" name="jumlah" placeholder="Jumlah (Rp)" value={formData.jumlah} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
              <input type="text" name="klaimOleh" placeholder="Klaim Oleh" value={formData.klaimOleh} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
              <input type="file" accept="image/*,application/pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full p-2 border rounded-lg" required />
              <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition">
                {isUploading ? 'Mengunggah...' : 'Unggah & Simpan'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 🔹 Full-Screen Loading Overlay */}
      {isUploading && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <LoaderCircle className="animate-spin w-20 h-20 text-white" />
        </div>
      )}
    </>
  );
}
