'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Download } from 'lucide-react';
// import { getPdfFiles } from '@/lib/pdf';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type FileMetadata = {
  id: number;
  filename: string;
  uploaded_at: string;
};

export function DownloadSection() {
  const [pdfFiles, setPdfFiles] = useState<FileMetadata[]>([]);
  const [selectedFile, setSelectedFile] = useState<string>('');
  const [latestIssue, setlatestIssue] = useState<FileMetadata | any>('')

  const downloadImage = PlaceHolderImages.find(p => p.id === 'download-image') ?? PlaceHolderImages[0];

  useEffect(() => {
    fetch('/api/pdfs')
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setPdfFiles(data || []);
      })
      .catch((err) => console.error('Failed to load PDFs:', err));
  }, []);

  const handleDownload = async (isLatest: any) => {

    const url = isLatest
      ? `/download/${encodeURIComponent(latestIssue?.filename)}`
      : `/download/${encodeURIComponent(selectedFile)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="overflow-hidden border-black mx-5 my-[10px] border-dashed border-[3px]">
      <div className="flex flex-col md:flex-row md:min-h-[600px]">

        <div className="relative md:w-1/2 min-h-[300px] md:min-h-[600px]">
          <Image
            src={downloadImage.imageUrl}
            alt={downloadImage.description}
            fill
            className="object-cover"
            loading='lazy'
          />
        </div>

        <div className='flex flex-col justify-center p-8 md:p-12 md:w-1/2'>
          <h2 className="font-headline text-3xl font-bold mb-4">Download Full Issues</h2>
          <p className="text-muted-foreground mb-6">
            Select an article to download as a PDF.
          </p>
          <div className="space-y-4">
            <Select onValueChange={setSelectedFile} value={selectedFile}>
              <SelectTrigger id="article-select-home">
                <SelectValue placeholder="Select a PDF to download" />
              </SelectTrigger>
              <SelectContent>
                {pdfFiles.length > 0 ? (
                  pdfFiles.map((file) => (
                    <SelectItem key={file.id} value={file.filename}>
                      {file.filename.replace(/-/g, ' ').replace('.pdf', '')}
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

            <div className='flex flex-col text-center'>
              <span>OR</span>
            </div>

            <Button onClick={() => handleDownload(true)} className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download our latest Issue
            </Button>

            {/* {pdfFiles && pdfFiles.length > 0 &&
              <Button onClick={handleDownloadLatest} className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Latest Issue
              </Button>
            } */}

          </div>
        </div>
      </div>
    </section>
  );
}
