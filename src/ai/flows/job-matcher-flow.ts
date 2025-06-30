'use server';
/**
 * @fileOverview An AI agent that matches a user's profile to a job description.
 * This flow is designed following the principles of the 4-layer AI agent architecture.
 *
 * - matchJobDescription - The main function that orchestrates the matching process.
 * - JobMatcherInput - The input type for the matchJobDescription function.
 * - JobMatcherOutput - The return type for the matchJobDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const userProfileSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  education: z.string().optional(),
  skills: z.string().optional(),
  interests: z.string().optional(),
  background: z.string().optional(),
});

const JobMatcherInputSchema = z.object({
  jobDescription: z
    .string()
    .min(100, 'Job description must be at least 100 characters.')
    .describe('The full text of the job description the user wants to match against.'),
  userProfile: userProfileSchema.describe("The user's professional profile, including skills, background, and interests."),
});
export type JobMatcherInput = z.infer<typeof JobMatcherInputSchema>;

const JobMatcherOutputSchema = z.object({
  matchPercentage: z.number().min(0).max(100).describe('An estimated percentage of how well the user profile matches the job description.'),
  strengths: z.array(z.string()).describe("A list of key strengths and qualifications from the user's profile that align with the job description."),
  gaps: z.array(z.string()).describe("A list of identified gaps or areas where the user's profile doesn't meet the job requirements."),
  suggestions: z.array(z.string()).describe('Actionable suggestions for how the user can improve their resume or skills to better fit the role.'),
});
export type JobMatcherOutput = z.infer<typeof JobMatcherOutputSchema>;

export async function matchJobDescription(input: JobMatcherInput): Promise<JobMatcherOutput> {
  return jobMatcherFlow(input);
}

// This prompt design follows the principles from the AI assignment:
// 1. Input Understanding: The prompt clearly defines the inputs (job description, user profile).
// 2. State Tracker: The user's profile acts as the state/memory for the agent.
// 3. Task Planner: The prompt outlines a clear plan: analyze, compare, identify strengths/gaps, and provide suggestions.
// 4. Output Generator: The prompt enforces a structured JSON output using `outputFormatInstructions`.
const prompt = ai.definePrompt({
  name: 'jobMatcherPrompt',
  input: {schema: JobMatcherInputSchema},
  output: {schema: JobMatcherOutputSchema},
  prompt: `You are an expert career coach and recruitment specialist. Your task is to analyze a user's professional profile against a given job description.

Follow these steps:
1.  **Analyze the Job Description:** Carefully read the job description to understand the key requirements, including required skills, experience level, and responsibilities.
2.  **Analyze the User's Profile:** Review the user's skills, interests, and professional background.
3.  **Compare and Evaluate:** Compare the user's profile to the job requirements.
4.  **Generate a Match Report:** Based on your analysis, provide a structured report in JSON format.

**User Profile:**
- Name: {{{userProfile.name}}}
- Education: {{{userProfile.education}}}
- Skills: {{{userProfile.skills}}}
- Interests: {{{userProfile.interests}}}
- Background: {{{userProfile.background}}}

**Job Description to Match:**
{{{jobDescription}}}

Please provide a detailed analysis including:
- An overall match percentage (your best estimate).
- A list of the user's key strengths for this role.
- A list of the most significant gaps.
- Actionable suggestions for the user to improve their candidacy. This could involve highlighting certain experiences, acquiring new skills, or tailoring their resume.

Output in the required JSON format.

{{outputFormatInstructions}}`,
});

const jobMatcherFlow = ai.defineFlow(
  {
    name: 'jobMatcherFlow',
    inputSchema: JobMatcherInputSchema,
    outputSchema: JobMatcherOutputSchema,
  },
  async input => {
    // The profile is already passed in, so we don't need a tool to fetch it.
    // This aligns with keeping the flow's logic simple, as per the assignment's guidance.
    const {output} = await prompt(input);
    return output!;
  }
);
