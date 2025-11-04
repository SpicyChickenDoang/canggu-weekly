'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Loader2, Upload, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';


export default function UploadArticlePage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a PDF file.");
      return;
    }

    setUploading(true);
    setMessage("");
    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/api/articles/new`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
        body: formData,

      });
      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        toast({
          title: "Upload Failed!",
          description: data.message,
          variant: "destructive",
          duration: 3000,
        })
      } else {
        toast({
          title: file.name,
          description: "Successfully Uploaded!",
          variant: "default",
          duration: 3000,
        })
      }


    } catch (err: any) {

      console.log("error: ", err);

      toast({
        title: "Upload Failed!",
        description: err.message,
        variant: "destructive",
        duration: 3000,
      })

    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-5xl font-bold">Upload Magazine</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Add a new magazine to the download list. Max PDF Size 8 MB.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Upload</CardTitle>
          <CardDescription>
            Select a PDF file from your computer to upload. Make sure to compress it before uploading, you can use Online tools such as <Link href={"https://www.ilovepdf.com/compress_pdf"} target='_blank' className='font-bold text-red-500'>ilovepdf</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>

          <div className="max-w-md mx-auto p-6">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="mb-4"
            />
            <Button
              onClick={handleUpload}
              disabled={!file || uploading}
              className="w-full flex items-center justify-center"
            >
              <Upload className="mr-2 h-4 w-4" />
              {uploading ? "Uploading..." : "Upload PDF"}
            </Button>

            {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
