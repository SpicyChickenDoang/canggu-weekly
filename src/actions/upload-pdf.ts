'use server';

import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { z } from 'zod';

const fileSchema = z.object({
  pdfFile: z
    .instanceof(File)
    .refine((file) => file.type === 'application/pdf', {
      message: 'Only PDF files are allowed.',
    })
    .refine((file) => file.size > 0, {
      message: 'File cannot be empty.',
    }),
});

export async function uploadPdfAction(
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const rawFormData = {
    pdfFile: formData.get('pdfFile'),
  };

  const validation = fileSchema.safeParse(rawFormData);

  if (!validation.success) {
    return {
      success: false,
      message: validation.error.errors.map((e) => e.message).join(', '),
    };
  }

  const { pdfFile } = validation.data;

  try {
    const pdfDir = path.join(process.cwd(), 'public', 'article-pdfs');
    const filePath = path.join(pdfDir, pdfFile.name);
    const fileBuffer = Buffer.from(await pdfFile.arrayBuffer());

    // Ensure the directory exists
    await mkdir(pdfDir, { recursive: true });

    // Write the file
    await writeFile(filePath, fileBuffer);

    return {
      success: true,
      message: `Successfully uploaded "${pdfFile.name}". It is now available for download.`,
    };
  } catch (error) {
    console.error('Failed to upload PDF:', error);
    return {
      success: false,
      message: 'An unexpected error occurred while uploading the file.',
    };
  }
}
