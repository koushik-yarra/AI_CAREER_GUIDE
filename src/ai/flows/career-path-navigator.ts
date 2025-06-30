// src/ai/flows/career-path-navigator.ts
'use server';

/**
 * @fileOverview AI-driven career path navigator flow.
 *
 * - careerPathNavigator - A function that suggests suitable career paths based on user input.
 * - CareerPathNavigatorInput - The input type for the careerPathNavigator function.
 * - CareerPathNavigatorOutput - The return type for the careerPathNavigator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerPathNavigatorInputSchema = z.object({
  skills: z
    .string()
    .describe('A comma-separated list of the user\u2019s skills.'),
  interests: z.string().describe('A description of the user\u2019s interests.'),
  education: z.string().describe('The user\u2019s highest level of education.'),
});
export type CareerPathNavigatorInput = z.infer<typeof CareerPathNavigatorInputSchema>;

const CareerPathNavigatorOutputSchema = z.array(z.object({
  careerPath: z.string().describe('A suggested career path.'),
  rationale: z.string().describe('The rationale for suggesting this career path.'),
}));
export type CareerPathNavigatorOutput = z.infer<typeof CareerPathNavigatorOutputSchema>;

export async function careerPathNavigator(input: CareerPathNavigatorInput): Promise<CareerPathNavigatorOutput> {
  return careerPathNavigatorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'careerPathNavigatorPrompt',
  input: {schema: CareerPathNavigatorInputSchema},
  output: {schema: CareerPathNavigatorOutputSchema},
  prompt: `You are a career advisor. You will suggest career paths based on the user's skills, interests, and education.

Skills: {{{skills}}}
Interests: {{{interests}}}
Education: {{{education}}}

Suggest three different career paths, along with a rationale for each suggestion.

Output in JSON format:

{{outputFormatInstructions}}`,
});

const careerPathNavigatorFlow = ai.defineFlow(
  {
    name: 'careerPathNavigatorFlow',
    inputSchema: CareerPathNavigatorInputSchema,
    outputSchema: CareerPathNavigatorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
