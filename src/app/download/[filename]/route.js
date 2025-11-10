// src/app/api/pdf/[filename]/route.js

export async function GET(request, { params }) {
  const { filename } = await params;
  const backendURL = process.env.BE_URL;
  const accessToken = process.env.ACCESS_TOKEN;

  try {
    // Fetch from backend securely using server-side token
    const res = await fetch(`${backendURL}/api/files/${filename}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    
    if (!res.ok) {
      return new Response('File not found', { status: res.status });
    }

    // Stream PDF to client
    return new Response(res.body, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('Error fetching PDF:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
