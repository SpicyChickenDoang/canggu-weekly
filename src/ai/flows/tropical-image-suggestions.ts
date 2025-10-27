'use server';

/**
 * @fileOverview A flow for suggesting tropical-themed AI-generated photographs for articles.
 *
 * - suggestTropicalImage - A function that suggests an AI-generated image for an article.
 * - SuggestTropicalImageInput - The input type for the suggestTropicalImage function.
 * - SuggestTropicalImageOutput - The return type for the suggestTropicalImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestTropicalImageInputSchema = z.object({
  articleTitle: z.string().describe('The title of the article.'),
  articleContent: z.string().describe('The content of the article.'),
  currentLayout: z.string().optional().describe('A description of the current layout of the magazine.'),
  styleGuide: z.string().optional().describe('The style guide for the magazine, including color schemes and fonts.'),
  existingImage: z.string().optional().describe('A data URI of an existing image, if any, that new images should mimic the style of.')
});
export type SuggestTropicalImageInput = z.infer<typeof SuggestTropicalImageInputSchema>;

const SuggestTropicalImageOutputSchema = z.object({
  suggestion: z.string().describe('A detailed suggestion for an AI-generated image, including a prompt.'),
  reasoning: z.string().describe('Reasoning for why the suggested image is appropriate for the article and fits the magazine layout and style.'),
  imageClashWarning: z.string().optional().describe('A warning message if the suggested image might clash with the existing layout or style.'),
  mimicPromptSuggestion: z.string().optional().describe('If an existing image was provided, suggests changes to the prompt to better mimic the existing style (e.g. shot angle, time of day).'),
});
export type SuggestTropicalImageOutput = z.infer<typeof SuggestTropicalImageOutputSchema>;

export async function suggestTropicalImage(input: SuggestTropicalImageInput): Promise<SuggestTropicalImageOutput> {
  return suggestTropicalImageFlow(input);
}

const suggestTropicalImagePrompt = ai.definePrompt({
  name: 'suggestTropicalImagePrompt',
  input: {schema: SuggestTropicalImageInputSchema},
  output: {schema: SuggestTropicalImageOutputSchema},
  prompt: `You are an AI assistant for a digital magazine called "Canggu Weekly", which focuses on local news and culture in a tropical, modern style. Your task is to suggest AI-generated photographs that would be appropriate for articles when a suitable image isn't readily available.

Consider the following:
* Article Title: {{{articleTitle}}}
* Article Content: {{{articleContent}}}
* Current Layout: {{{currentLayout}}}
* Style Guide: {{{styleGuide}}}
{{#if existingImage}}* Existing Image: {{media url=existingImage}}{{/if}}

Reasoning Process:
1.  Analyze the article title and content to understand the main topic and themes.
2.  Consider the magazine's style guide and current layout to ensure the suggested image fits the overall aesthetic.
3.  If an existing image is provided, analyze its style and suggest how to mimic it in the generated image.
4.  Determine if an AI-generated image is suitable, considering potential clashes with the layout or style. Provide a warning if necessary.
5.  Formulate a detailed suggestion for an AI-generated image, including a prompt that would generate the image.
6.  If an existing image was provided, and the style is slightly off, suggest a new prompt that better mimics the existing image.

Output:
Provide a suggestion for an AI-generated image, reasoning for its appropriateness, any clash warnings, and suggestions for how to mimic an existing image.

Follow the schema:
{{outputSchemaDescription}}
`,
});

const suggestTropicalImageFlow = ai.defineFlow(
  {
    name: 'suggestTropicalImageFlow',
    inputSchema: SuggestTropicalImageInputSchema,
    outputSchema: SuggestTropicalImageOutputSchema,
  },
  async input => {
    const {output} = await suggestTropicalImagePrompt(input);
    return output!;
  }
);
