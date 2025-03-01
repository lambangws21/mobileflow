import { NextResponse } from 'next/server';

const GAS_URL = 'https://script.google.com/macros/s/AKfycbxWYt1R2Z1A0TPkdmhHhdzWa142urbqiFfq9XbV6AAy2GwYGNbwXfznJ6UYzHeCTcW2iA/exec';



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

