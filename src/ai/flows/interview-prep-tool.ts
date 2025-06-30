'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating role-specific interview questions and sample answers.
 *
 * - `interviewPrepTool`: A function that orchestrates the generation of interview questions and answers.
 * - `InterviewPrepToolInput`: The input type for the `interviewPrepTool` function.
 * - `InterviewPrepToolOutput`: The output type for the `interviewPrepTool` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InterviewPrepToolInputSchema = z.object({
  userBackground: z
    .string()
    .describe('A detailed description of the user\'s professional background, including skills, experience, and education.'),
  targetRole: z
    .string()
    .describe('The specific job title and industry the user is interviewing for.'),
  questionCount: z
    .number()
    .int()
    .min(1)
    .max(10)
    .default(3)
    .describe('The number of interview questions to generate.'),
});
export type InterviewPrepToolInput = z.infer<typeof InterviewPrepToolInputSchema>;

const InterviewPrepToolOutputSchema = z.object({
  questionsAndAnswers: z.array(
    z.object({
      question: z.string().describe('An interview question tailored to the user and the target role.'),
      sampleAnswer: z.string().describe('A sample answer to the interview question, based on the user\'s background.'),
    })
  ),
});
export type InterviewPrepToolOutput = z.infer<typeof InterviewPrepToolOutputSchema>;

export async function interviewPrepTool(input: InterviewPrepToolInput): Promise<InterviewPrepToolOutput> {
  return interviewPrepToolFlow(input);
}

const interviewPrepPrompt = ai.definePrompt({
  name: 'interviewPrepPrompt',
  input: {schema: InterviewPrepToolInputSchema},
  output: {schema: InterviewPrepToolOutputSchema},
  prompt: `You are an AI career coach specializing in interview preparation. You will generate {{questionCount}} interview questions tailored to the user's background and the target role. You will also provide a sample answer to each question, based on the user's background.

User Background: {{{userBackground}}}
Target Role: {{{targetRole}}}

Format your response as a JSON array of objects. Each object should have a "question" and a "sampleAnswer" field.
`,
});

const interviewPrepToolFlow = ai.defineFlow(
  {
    name: 'interviewPrepToolFlow',
    inputSchema: InterviewPrepToolInputSchema,
    outputSchema: InterviewPrepToolOutputSchema,
  },
  async input => {
    const {output} = await interviewPrepPrompt(input);
    return output!;
  }
);
