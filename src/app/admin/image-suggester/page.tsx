'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestImageAction } from '@/actions/suggest-image';
import type { SuggestTropicalImageOutput } from '@/ai/flows/tropical-image-suggestions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2, AlertTriangle, Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  articleTitle: z.string().min(5, 'Title must be at least 5 characters.'),
  articleContent: z.string().min(50, 'Content must be at least 50 characters.'),
  currentLayout: z.string().optional(),
  styleGuide: z.string().optional(),
  existingImage: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function fileToDataUri(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
}

export default function ImageSuggesterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SuggestTropicalImageOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      articleTitle: '',
      articleContent: '',
      currentLayout: 'A grid-based layout that is easy to navigate and visually appealing.',
      styleGuide: 'Primary: Sand (#F4EAD4), Background: Very light sand (#FDF7ED), Accent: Sunset Orange (#FFB86B). Fonts: Playfair Display for headlines, PT Sans for body.',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    setError(null);

    let imageUri: string | undefined;
    if (values.existingImage && values.existingImage.length > 0) {
        try {
            imageUri = await fileToDataUri(values.existingImage[0]);
        } catch(e) {
            setError("Failed to read image file.");
            setIsLoading(false);
            return;
        }
    }

    const response = await suggestImageAction({
        ...values,
        existingImage: imageUri,
    });
    
    if (response.error) {
      setError(response.error);
    } else {
      setResult(response.data);
    }
    setIsLoading(false);
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-5xl font-bold">AI Image Suggester</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Let AI suggest the perfect tropical-themed image for your article.
        </p>
      </header>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Article Details</CardTitle>
            <CardDescription>
              Provide context for the AI to generate a relevant image suggestion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="articleTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Article Title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Canggu's Best Surf Spots" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="articleContent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Article Content</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste the full content of the article here..."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="existingImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Existing Image (Optional)</FormLabel>
                      <FormControl>
                        <Input type="file" accept="image/*" {...form.register('existingImage')} />
                      </FormControl>
                      <FormDescription>
                        Upload an image to mimic its style.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-4 w-4" />
                  )}
                  Suggest Image
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {isLoading && (
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center h-full">
              <Loader2 className="mb-4 h-16 w-16 animate-spin text-primary" />
              <h3 className="text-xl font-semibold">Generating Suggestion...</h3>
              <p className="text-muted-foreground">The AI is thinking. Please wait a moment.</p>
            </div>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {result && (
            <Card className="h-full">
              <CardHeader>
                <CardTitle>AI Suggestion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {result.imageClashWarning && (
                    <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Style Clash Warning</AlertTitle>
                        <AlertDescription>{result.imageClashWarning}</AlertDescription>
                    </Alert>
                )}
                <div>
                    <h4 className="font-semibold mb-2">Suggested Prompt:</h4>
                    <p className="rounded-md bg-muted p-3 text-sm font-mono">{result.suggestion}</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">Reasoning:</h4>
                    <p className="text-sm text-muted-foreground">{result.reasoning}</p>
                </div>
                {result.mimicPromptSuggestion && (
                    <Alert>
                        <Lightbulb className="h-4 w-4" />
                        <AlertTitle>Prompt Improvement</AlertTitle>
                        <AlertDescription>{result.mimicPromptSuggestion}</AlertDescription>
                    </Alert>
                )}
              </CardContent>
            </Card>
          )}
          {!isLoading && !result && !error && (
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center h-full">
              <Wand2 className="mb-4 h-16 w-16 text-muted-foreground" />
              <h3 className="text-xl font-semibold">Ready for Magic</h3>
              <p className="text-muted-foreground">Fill out the form to get an AI image suggestion.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
