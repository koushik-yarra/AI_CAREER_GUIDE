// src/ai/flows/resume-refiner.ts
'use server';

/**
 * @fileOverview A resume refinement AI agent.
 *
 * - refineResume - A function that handles the resume refinement process.
 * - RefineResumeInput - The input type for the refineResume function.
 * - RefineResumeOutput - The return type for the refineResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineResumeInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume to be refined.'),
  jobDescription: z.string().optional().describe('Optional job description to tailor the resume towards.'),
});
export type RefineResumeInput = z.infer<typeof RefineResumeInputSchema>;

const RefineResumeOutputSchema = z.object({
  refinedResume: z.string().describe('The AI-refined resume content with improved clarity, impact, and ATS compatibility.'),
  suggestions: z.string().describe('A summary of the suggestions made by the AI.'),
});
export type RefineResumeOutput = z.infer<typeof RefineResumeOutputSchema>;

export async function refineResume(input: RefineResumeInput): Promise<RefineResumeOutput> {
  return refineResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refineResumePrompt',
  input: {schema: RefineResumeInputSchema},
  output: {schema: RefineResumeOutputSchema},
  prompt: `You are an expert resume writer, skilled in improving resumes for clarity, impact, and Applicant Tracking System (ATS) compatibility.

  Please analyze the provided resume and offer specific, actionable suggestions for improvement.
  If a job description is provided, tailor the resume towards that role.

  Resume:
  {{resumeText}}

  Job Description (if available):
  {{#if jobDescription}}
  {{jobDescription}}
  {{else}}
  No job description provided. Please provide general suggestions.
  {{/if}}`,
});

const refineResumeFlow = ai.defineFlow(
  {
    name: 'refineResumeFlow',
    inputSchema: RefineResumeInputSchema,
    outputSchema: RefineResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
