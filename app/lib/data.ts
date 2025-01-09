import { db, sql } from '@vercel/postgres';
import { Guess } from './definitions';


export async function fetchLatestGuesses() {
  try {
    const client = await db.connect(); 
    
    const data = await client.sql<Guess>`
      SELECT *
      FROM guesses
      WHERE "beatId" = 8;
      `;

    const latestGuesses = data.rows.map((guess) => ({
      ...guess
    }));
    return latestGuesses;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest guesses.');
  }
};