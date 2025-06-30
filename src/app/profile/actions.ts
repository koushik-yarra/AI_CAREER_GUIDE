'use server';

import { z } from 'zod';
import pool from '@/lib/db';
import { revalidatePath } from 'next/cache';
import type { RowDataPacket } from 'mysql2';

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

async function initializeDatabase() {
  const connection = await pool.getConnection();
  try {
    await connection.query(`
      CREATE TABLE IF NOT EXISTS profiles (
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        education VARCHAR(255),
        skills TEXT,
        interests TEXT,
        background TEXT,
        CONSTRAINT single_profile CHECK (id = 1)
      );
    `);
  } catch(error) {
    console.error("Failed to initialize database:", error);
    throw new Error("Could not initialize database.");
  } finally {
    connection.release();
  }
}

export async function getProfile(): Promise<Profile | null> {
  try {
    await initializeDatabase();
  } catch (error) {
    return null;
  }
  
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query<RowDataPacket[]>('SELECT name, email, education, skills, interests, background FROM profiles WHERE id = 1');
    if (rows.length > 0) {
      const result = profileSchema.safeParse(rows[0]);
      if (result.success) {
        return result.data;
      }
    }
    return null;
  } catch (error) {
    console.error('Failed to get profile:', error);
    return null;
  } finally {
    connection.release();
  }
}

export async function saveProfile(data: Profile): Promise<ProfileFormState> {
  const validatedFields = profileSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid fields. Failed to Save Profile.',
    };
  }

  const { name, email, education, skills, interests, background } = validatedFields.data;
  
  try {
    await initializeDatabase();
  } catch (error) {
    return { message: 'Database Error: Failed to initialize.', errors: null };
  }
  
  const connection = await pool.getConnection();
  
  try {
    await connection.query(
      `
      INSERT INTO profiles (id, name, email, education, skills, interests, background)
      VALUES (1, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        email = VALUES(email),
        education = VALUES(education),
        skills = VALUES(skills),
        interests = VALUES(interests),
        background = VALUES(background)
      `,
      [name, email, education, skills, interests, background]
    );
    
    revalidatePath('/profile');
    return { message: 'Profile saved successfully!', errors: null };
  } catch (error) {
    console.error('Database Error:', error);
    return { message: 'Database Error: Failed to save profile.', errors: null };
  } finally {
    connection.release();
  }
}
