'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Download } from 'lucide-react';
import { getPdfFiles } from '@/lib/pdf';

export default function DownloadArticlePage() {
  const [pdfFiles, setPdfFiles] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string>('');

  useEffect(() => {
    // We are fetching the files on the client side, but the function executes on the server.
    // This is a simplified approach. In a real app, you might fetch this list via an API route.
    async function fetchFiles() {
      const files = await getPdfFiles();
      setPdfFiles(files);
      if (files.length > 0) {
        setSelectedFile(files[0]);
      }
    }
    fetchFiles();
  }, []);

  const handleDownload = () => {
    if (selectedFile) {
      // The files are in the public directory, so they are directly accessible.
      window.location.href = `/article-pdfs/${selectedFile}`;
    }
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold">Download Article</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Select an article to download as a PDF.
        </p>
      </header>

      <div className="rounded-lg border bg-card p-8 shadow-sm">
        <div className="space-y-6">
          <div>
            <label htmlFor="article-select" className="mb-2 block text-sm font-medium text-foreground">
              Choose an article
            </label>
            <Select onValueChange={setSelectedFile} value={selectedFile}>
              <SelectTrigger id="article-select">
                <SelectValue placeholder="Select a PDF to download" />
              </SelectTrigger>
              <SelectContent>
                {pdfFiles.length > 0 ? (
                  pdfFiles.map((file) => (
                    <SelectItem key={file} value={file}>
                      {file.replace(/-/g, ' ').replace('.pdf', '')}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="loading" disabled>
                    Loading articles...
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleDownload} disabled={!selectedFile} className="w-full">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
