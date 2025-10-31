'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactAction } from '@/actions/contact';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const contactImage = PlaceHolderImages.find(p => p.id === 'contact-image') ?? PlaceHolderImages[0];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);

    const response = await contactAction(values);
    setResult(response);
    setIsLoading(false);

    if (response.success) {
      form.reset();
    }
  }

  return (
    <section id="contact" className="overflow-hidden border-[3px] border-black mx-5 my-[10px] border-dashed">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/2 hidden md:block min-h-[550px] md:min-h-auto">
            <Image
                src={"/images/img-6.webp"}
                alt={contactImage.description}
                fill
                className="object-cover"
                loading="lazy"
            />
        </div>
        <div className="mx-auto max-w-lg p-8 md:w-1/2">
            <div className="mb-6 text-center">
                <h2 className="font-headline text-3xl font-bold">Contact Us</h2>
                <p className="text-muted-foreground">Have a question or a story tip? Drop us a line!</p>
            </div>
            <div>
                {result ? (
                <Alert
                    variant={result.success ? 'default' : 'destructive'}
                    className="my-4"
                >
                    {result.success ? (
                    <CheckCircle className="h-4 w-4" />
                    ) : (
                    <AlertTriangle className="h-4 w-4" />
                    )}
                    <AlertTitle>{result.success ? 'Message Sent!' : 'Error'}</AlertTitle>
                    <AlertDescription>{result.message}</AlertDescription>
                </Alert>
                ) : (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                            <Textarea
                                placeholder="Your message here..."
                                className="min-h-24"
                                {...field}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                        <Send className="mr-2 h-4 w-4" />
                        )}
                        Send Message
                    </Button>
                    </form>
                </Form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
