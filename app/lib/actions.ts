'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Guess } from './definitions';

const FormSchema = z.object({
  beatId: z.number(),
  beatDate: z.string(),
  username: z.string({
    invalid_type_error: 'Please enter your username.',
  }),
  guess: z.string({
    invalid_type_error: 'Please enter a guess.',
  }),
  platform: z.string(),
});

const CreateGuess = FormSchema.omit({ beatId: true, beatDate: true, platform: true });

export type State = {
  errors?: {
    username?: string[];
    guess?: string[];
  };
  message?: string | null;
};

export async function createGuess(
  prevState: State,
  { formData, beatId, beatDate, platform }: { formData: FormData; beatId: number; beatDate: string, platform: string }
): Promise<State> {
  console.log('createGuess called'); // Debugging statement

  // Validate form fields using Zod
  const validatedFields = CreateGuess.safeParse({
    username: formData.get('username'),
    guess: formData.get('guess'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    console.log('Validation failed', validatedFields.error.flatten().fieldErrors); // Debugging statement
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing username or guess.',
    };
  }

  // Prepare data for insertion into the database
  const { username, guess } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];

  // Create a Guess object using the extracted data and user input
  const guessData: Guess = {
    beatId: beatId,
    beatDate: beatDate,
    username: username as string, // Type assertion for username
    guess: guess as string       // Type assertion for guess
  };
  console.log('Guess data:', guessData); // Debugging statement

  // Insert data into the database
  try {
    await sql`
      INSERT INTO public.guesses ("beatId", "beatDate", username, guess, platform)
      VALUES (${beatId}, ${beatDate}, ${username}, ${guess}, ${platform});
    `;
    console.log('Data inserted successfully'); // Debugging statement
  } catch (error) {
    console.error('Database error:', error); // Debugging statement
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Guess.',
    };
  }

  // Revalidate the cache for the home page and redirect the user.
  revalidatePath('/');
  redirect('/thanks');
}