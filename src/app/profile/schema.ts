import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(1, { message: 'Full Name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  education: z.string().optional(),
  skills: z.string().optional(),
  interests: z.string().optional(),
  background: z.string().optional(),
});

export type Profile = z.infer<typeof profileSchema>;

export type ProfileFormState = {
  message: string;
  errors?: Record<keyof Profile, string[]> | null;
};
