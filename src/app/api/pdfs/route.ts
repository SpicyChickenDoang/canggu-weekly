// src/app/api/pdfs/route.js

export async function GET() {
  const backendURL = process.env.BE_URL || 'https://bc3b7fca0b25.ngrok-free.app';
  const accessToken = process.env.ACCESS_TOKEN; // store securely in .env.local

  try {
    const res = await fetch(`${backendURL}/api/articles`, {
      cache: 'no-store',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Backend error:', text);
      return Response.json({ error: 'Failed to fetch PDFs from backend' }, { status: res.status });
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}