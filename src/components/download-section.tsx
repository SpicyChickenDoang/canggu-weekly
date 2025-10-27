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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function DownloadSection() {
  const [pdfFiles, setPdfFiles] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string>('');

  useEffect(() => {
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
      window.open(`/article-pdfs/${selectedFile}`, '_blank');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-3xl font-bold">Download Full Issues</CardTitle>
        <CardDescription>
          Select an article to download as a PDF.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select onValueChange={setSelectedFile} value={selectedFile}>
            <SelectTrigger id="article-select-home">
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
          <Button onClick={handleDownload} disabled={!selectedFile} className="w-full">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
