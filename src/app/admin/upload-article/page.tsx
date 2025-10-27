'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { uploadPdfAction } from '@/actions/upload-pdf';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2, Upload, CheckCircle, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  pdfFile: z
    .any()
    .refine((files) => files?.length == 1, 'PDF file is required.')
    .refine(
      (files) => files?.[0]?.type === 'application/pdf',
      'Only PDF files are allowed.'
    )
    .refine((files) => files?.[0]?.size <= 5000000, `Max file size is 5MB.`),
});

type FormValues = z.infer<typeof formSchema>;

export default function UploadArticlePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append('pdfFile', values.pdfFile[0]);

    const response = await uploadPdfAction(formData);
    setResult(response);
    setIsLoading(false);

    if (response.success) {
      form.reset();
    }
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-5xl font-bold">Upload Article PDF</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Add a new PDF article to the download list.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Upload PDF</CardTitle>
          <CardDescription>
            Select a PDF file from your computer to upload. The file name will be used as the article title.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="pdfFile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PDF Article</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="application/pdf"
                        {...form.register('pdfFile')}
                      />
                    </FormControl>
                    <FormDescription>Max file size: 5MB.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="mr-2 h-4 w-4" />
                )}
                Upload Article
              </Button>
            </form>
          </Form>

          {result && (
            <Alert
              variant={result.success ? 'default' : 'destructive'}
              className="mt-6"
            >
              {result.success ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertTriangle className="h-4 w-4" />
              )}
              <AlertTitle>{result.success ? 'Success' : 'Error'}</AlertTitle>
              <AlertDescription>{result.message}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
