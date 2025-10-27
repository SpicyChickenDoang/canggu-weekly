'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function contactAction(
  values: z.infer<typeof contactSchema>
): Promise<{ success: boolean; message: string }> {
  const validation = contactSchema.safeParse(values);

  if (!validation.success) {
    return {
      success: false,
      message: 'Invalid form data. Please check your entries and try again.',
    };
  }

  const { name, email, message } = validation.data;

  // In a real application, you would send an email, save to a database, etc.
  // For this demo, we'll just log it to the server console.
  console.log('New contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Thanks for reaching out! We'll get back to you soon.",
  };
}
