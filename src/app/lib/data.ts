import { sql } from "@vercel/postgres";
import { GuessTableRow, Video, UserGuess } from "./definitions";

export async function fetchDailyGuesses({ day }: { day?: number } = {}) {
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
      guess: guess.guess.replace(/&apos;/g, "'"),
    }));

    return guesses;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error(`Failed to fetch the day ${day} guesses.`);
  }
}

export async function fetchVideos() {
  try {
    const data = await sql<Video>`
      SELECT * FROM videos;
    `;

    const videos = data.rows.map((video) => ({
      ...video,
      video: video.songName ? video.songName.replace(/&apos;/g, "'") : null,
    }));

    return videos;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error(`Failed to fetch videos.`);
  }
}

export async function fetchVideosForYear(year: number) {
  try {
    const data = await sql<Video>`
      SELECT * FROM videos WHERE EXTRACT(YEAR FROM "postDate") = ${year};
    `;

    const videos = data.rows.map((video) => ({
      ...video,
      video: video.songName ? video.songName.replace(/&apos;/g, "'") : null,
    }));

    return videos;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error(`Failed to fetch videos.`);
  }
}

export async function fetchUserGuesses(userId: string) {
  try {
    const data = await sql<UserGuess>`
      SELECT * FROM user_guesses WHERE user_id = ${userId};
    `;

    const guesses = data.rows.map((guess) => ({
      ...guess,
      guess: guess.song_name ? guess.song_name.replace(/&apos;/g, "'") : null,
    }));

    return guesses;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error(`Failed to fetch videos.`);
  }
}
