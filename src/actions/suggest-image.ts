'use server';

import { suggestTropicalImage, SuggestTropicalImageInput, SuggestTropicalImageOutput } from '@/ai/flows/tropical-image-suggestions';

export async function suggestImageAction(
  input: SuggestTropicalImageInput
): Promise<{ data: SuggestTropicalImageOutput | null; error: string | null }> {
  try {
    const output = await suggestTropicalImage(input);
    return { data: output, error: null };
  } catch (e: any) {
    console.error(e);
    return { data: null, error: e.message || 'An unknown error occurred.' };
  }
}
