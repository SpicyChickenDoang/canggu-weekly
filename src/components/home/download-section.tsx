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
import { getPdfFiles } from '@/lib/pdf';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function DownloadSection() {
  const [pdfFiles, setPdfFiles] = useState<string[]>([]);
  const [selectedFile, setSelectedFile] = useState<string>('');
  const downloadImage = PlaceHolderImages.find(p => p.id === 'download-image') ?? PlaceHolderImages[0];

  useEffect(() => {
    async function fetchFiles() {
      const files = await getPdfFiles();
      console.log(files);
      
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
    <section className="overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-screen">
            <div className="relative hidden min-h-[300px] md:block">
                <Image 
                    src={downloadImage.imageUrl}
                    alt={downloadImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={downloadImage.imageHint}
                />
            </div>
            <div className='flex flex-col justify-center p-8 md:p-12'>
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
            </div>
      </div>
    </section>
  );
}
