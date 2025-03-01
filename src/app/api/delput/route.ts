import { NextResponse } from 'next/server';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbypKX82mJjDpbCaMRryd01xdm-xS5S5rbPGN9nxpJLwiDJwMGrwk_nP_8leqaApq10b/exec';


// ✅ PUT: Update data
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const response = await fetch(GAS_URL, {
      method: 'POST', // ⚠️ Google Apps Script tidak mendukung PUT langsung
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ methodOverride: 'PUT', ...body }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error PUT:', error);
    return NextResponse.json({ status: 'error', message: String(error) });
  }
}

// ✅ DELETE: Hapus data
export async function DELETE(req: Request) {
  try {
    const { no } = await req.json();
    const response = await fetch(GAS_URL, {
      method: 'POST', // ⚠️ Google Apps Script tidak mendukung DELETE langsung
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ methodOverride: 'DELETE', no }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error DELETE:', error);
    return NextResponse.json({ status: 'error', message: String(error) });
  }
}

