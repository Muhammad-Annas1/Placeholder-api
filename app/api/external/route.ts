// app/api/external/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch data from JSONPlaceholder API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();  // Parse the response as JSON
    return NextResponse.json(data); // Return the data as a JSON response
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
