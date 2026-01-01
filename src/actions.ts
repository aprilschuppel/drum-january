'use server'
import { auth } from '@clerk/nextjs/server'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { Video } from './app/lib/definitions'


export async function submitGuess(formData: FormData) {
  // 1. Get the user (securely)
  const { userId } = await auth()
  if (!userId) throw new Error("Must be logged in")

  // 2. Get the input
  const song = formData.get('song') as string
  const videoId = formData.get('songId') as string
  
  // 3. Save to DB
  // Note: user_id comes from Clerk, not the client!
  await sql`
    INSERT INTO user_guesses (user_id, song_name, video_id)
    VALUES (${userId}, ${song}, ${videoId})
  `

  // 4. Refresh the page so it shows the "Already Guessed" state
  revalidatePath('/')
}

export async function fetchCurrentVideo() {
  try {
    const data = await sql<Video>`
      SELECT * FROM videos order by id desc LIMIT 1;
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