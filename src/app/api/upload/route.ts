import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const backendURL = process.env.BE_URL!;
  const accessToken = process.env.ACCESS_TOKEN!;

  try {
    const formData = await req.formData();
    const pdfFile = formData.get("pdf");

    if (!(pdfFile instanceof File)) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }

    // Forward the file to backend
    const backendForm = new FormData();
    backendForm.append("pdf", pdfFile);

    console.log(backendForm);

    const res = await fetch(`${backendURL}/api/articles/new`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
      body: backendForm,
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
