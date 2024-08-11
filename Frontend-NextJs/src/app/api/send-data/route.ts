// src/app/api/send-data/route.ts
import { NextResponse } from 'next/server';

// Handle POST request
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Process the data (e.g., save it to a database)
    console.log('Received data:', data);

    return NextResponse.json({ message: 'Data received successfully' });
  } catch (error) {
    console.error('Error processing dat1a:', error);
    return NextResponse.error();
  }
}

// You can add other HTTP methods if needed
// export async function GET(request: Request) {
//   // Handle GET request
// }
