import { sql } from "@vercel/postgres";
import { GuessTableRow, Video } from "./definitions";

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

export async function fetchData(endpoint: string) {
  const token = process.env.NEXT_PUBLIC_TINYBIRD_TOKEN;

  const url = `${process.env.NEXT_PUBLIC_TB_BASE_URL}/v0/pipes/${endpoint}.json?&token=${token}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const data = json.data;
    console.log(data);
    if (Array.isArray(data)) {
      return data;
    } else {
      console.log('Unexpected data format for genre leaders');
    }
  } catch (error) {
    console.error('Error fetching genre leaders:', error);
  }
}
