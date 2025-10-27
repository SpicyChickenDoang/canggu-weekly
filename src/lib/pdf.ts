'use server';

import fs from 'fs/promises';
import path from 'path';

export async function getPdfFiles(): Promise<string[]> {
  try {
    const pdfDir = path.join(process.cwd(), 'public', 'article-pdfs');
    const files = await fs.readdir(pdfDir);
    return files.filter((file) => file.endsWith('.pdf'));
  } catch (error) {
    console.error('Failed to read PDF directory:', error);
    // If the directory doesn't exist, return an empty array.
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}
