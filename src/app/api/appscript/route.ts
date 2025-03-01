// import { NextResponse } from 'next/server';

// const GAS_URL = 'https://script.google.com/macros/s/AKfycbypKX82mJjDpbCaMRryd01xdm-xS5S5rbPGN9nxpJLwiDJwMGrwk_nP_8leqaApq10b/exec'; // 🔗 Ganti dengan URL Web App dari GAS
// const FOLDER_ID = '1P7cfxE8mjeint1ZDydzibd6UE39dYqCB'; // 📂 Ganti dengan Folder ID Google Drive

// // ✅ GET: Ambil daftar file dari Google Sheets
// export async function GET() {
//   try {
//     const response = await fetch(GAS_URL, { method: 'GET', cache: 'no-store' });
//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ status: 'error', message: String(error) });
//   }
// }

// // ✅ POST: Upload file ke Google Drive
// export async function POST(req: Request) {
//   try {
//     const { fileBase64, fileName, mimeType } = await req.json();

//     const response = await fetch(GAS_URL, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         fileName,
//         fileBase64,
//         mimeType,
//         folderId: FOLDER_ID,
//       }),
//     });

//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ status: 'error', message: String(error) });
//   }
// }

import { NextResponse } from 'next/server';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbypKX82mJjDpbCaMRryd01xdm-xS5S5rbPGN9nxpJLwiDJwMGrwk_nP_8leqaApq10b/exec'; // 🔗 URL dari GAS
const FOLDER_ID = '1P7cfxE8mjeint1ZDydzibd6UE39dYqCB'; // 📂 Folder ID Google Drive

// ✅ GET: Ambil data file lengkap
export async function GET() {
  try {
    const response = await fetch(GAS_URL, { method: 'GET', cache: 'no-store' });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 'error', message: String(error) });
  }
}

// ✅ POST: Upload file ke Google Drive dengan metadata lengkap
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

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 'error', message: String(error) });
  }
}

