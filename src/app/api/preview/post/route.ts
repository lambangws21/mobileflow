import { NextResponse } from 'next/server';
const GAS_URL = 'https://script.google.com/macros/s/AKfycbxWYt1R2Z1A0TPkdmhHhdzWa142urbqiFfq9XbV6AAy2GwYGNbwXfznJ6UYzHeCTcW2iA/exec';


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 'error', message: String(error) });
  }
}