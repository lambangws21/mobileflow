import { NextResponse } from 'next/server';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbxWYt1R2Z1A0TPkdmhHhdzWa142urbqiFfq9XbV6AAy2GwYGNbwXfznJ6UYzHeCTcW2iA/exec';
const FOLDER_ID = '1DhExUaqj-JvctO7WAj-NCIBPT_811YZm';

// ✅ GET: Ambil data dari Sheet1
export async function GET() {
  try {
    const response = await fetch(GAS_URL, { method: 'GET', cache: 'no-store' });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 'error', message: String(error) });
  }
}

// ✅ POST: Upload file dan simpan link otomatis ke Sheet1
export async function POST(req: Request) {
  try {
    const { date, jenisBiaya, keterangan, jumlah, klaimOleh, fileBase64, fileName, mimeType } = await req.json();

    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date,
        jenisBiaya,
        keterangan,
        jumlah,
        klaimOleh,
        fileName,
        fileBase64,
        mimeType,
        folderId: FOLDER_ID,
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 'error', message: String(error) });
  }
}

// ✅ PUT: Update data berdasarkan ID
export async function PUT(req: Request) {
  try {
    const { id, date, jenisBiaya, keterangan, jumlah, klaimOleh } = await req.json();

    const response = await fetch(`${GAS_URL}?id=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date,
        jenisBiaya,
        keterangan,
        jumlah,
        klaimOleh,
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 'error', message: String(error) });
  }
}

// ✅ DELETE: Hapus data berdasarkan ID
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const response = await fetch(`${GAS_URL}?id=${id}`, { method: 'DELETE' });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 'error', message: String(error) });
  }
}
