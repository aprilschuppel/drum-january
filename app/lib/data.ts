import { sql } from '@vercel/postgres';
import { GuessTableRow } from './definitions';

export async function fetchDailyGuesses({day = 8}: {day?: number} = {}) {
  try {
    const data = await sql<GuessTableRow>`
      SELECT 
        username,
        STRING_AGG(guess, ' - ') AS guess,
        BOOL_OR(correct) AS correct
      FROM guesses
      WHERE "beatId" = ${day}
      GROUP BY username
      ORDER BY username ASC;
    `;
    
    const guesses = data.rows.map((guess) => ({
      ...guess,
      guess: guess.guess.replace(/&apos;/g, "'")
    }));

    return guesses;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error(`Failed to fetch the day ${day} guesses.`);
  }
}