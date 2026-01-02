import { auth } from "@clerk/nextjs/server";
import { fetchVideosForYear, fetchUserGuesses } from "./lib/data";
import { VideoCarousel } from "./components/VideoCarousel";

export default async function DrumChallenge() {
  const { userId } = await auth();
  const videos = await fetchVideosForYear(2026);
  console.log(videos)

  let userGuesses: any[] = [];
  if (userId) {
    userGuesses = await fetchUserGuesses(userId);
    console.log(userGuesses)
  }

  return (
    <main className="max-w-full mx-auto text-center text-palette-night font-sans flex flex-col items-center">
       <VideoCarousel 
         videos={videos} 
         userGuesses={userGuesses}
         isArchive={false}
       />
    </main>
  );
}