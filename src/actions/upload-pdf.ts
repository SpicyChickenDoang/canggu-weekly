'use server';

import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function uploadPdfAction(formData: FormData) {
  const pdfFile = formData.get('pdfFile') as File;

  if (!pdfFile) {
    return { success: false, message: 'No file uploaded.' };
  }

  const fileBuffer = Buffer.from(await pdfFile.arrayBuffer());

  // 🧱 Save inside public/article-pdfs (safe locally and for production servers)
  const pdfDir = '/tmp/article-pdfs';
  await mkdir(pdfDir, { recursive: true });
  const filePath = path.join(pdfDir, pdfFile.name);
  await writeFile(filePath, fileBuffer);

  return {
    success: true,
    message: `Successfully uploaded "${pdfFile.name}".`,
    url: `/api/pdf/${pdfFile.name}`, // API route access
  };

}
