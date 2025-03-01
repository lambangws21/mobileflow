import { NextResponse } from 'next/server';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbypKX82mJjDpbCaMRryd01xdm-xS5S5rbPGN9nxpJLwiDJwMGrwk_nP_8leqaApq10b/exec'; // 🔗 Ganti dengan URL Web App dari GAS
const FOLDER_ID = '1DhExUaqj-JvctO7WAj-NCIBPT_811YZm'; // 📂 Ganti dengan ID folder Drive

// ✅ GET: Ambil data file dari Google Sheets
export async function GET() {
  try {
    const response = await fetch(GAS_URL, { method: 'GET', cache: 'no-store' });
    const contentType = response.headers.get('content-type');

    if (!contentType?.includes('application/json')) {
      const textResponse = await response.text(); // ⏹ Debug jika response bukan JSON
      console.error('Unexpected response:', textResponse);
      throw new Error('API tidak mengembalikan JSON');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error GET:', error);
    return NextResponse.json({ status: 'error', message: String(error) });
  }
}

// ✅ POST: Upload file ke Google Drive
export async function POST(req: Request) {
  try {
    const { fileBase64, fileName, mimeType } = await req.json();

    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fileName,
        fileBase64,
        mimeType,
        folderId: FOLDER_ID,
      }),
    });

    const contentType = response.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      const textResponse = await response.text();
      console.error('Unexpected response (POST):', textResponse);
      throw new Error('API tidak mengembalikan JSON saat POST');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error POST:', error);
    return NextResponse.json({ status: 'error', message: String(error) });
  }
}
