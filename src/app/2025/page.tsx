import { auth } from "@clerk/nextjs/server";
import { fetchVideosForYear, fetchUserGuesses} from "../lib/data";
import { VideoCarousel } from "../components/VideoCarousel";
import { UserGuess } from "../lib/definitions";

export default async function DrumChallenge() {
  const { userId } = await auth();
  const videos = await fetchVideosForYear(2025);

  let userGuesses: UserGuess[] = [];
  if (userId) {
    userGuesses = await fetchUserGuesses(userId);
  }

  return (
    <main className="max-w-full mx-auto text-center text-palette-night font-sans flex flex-col items-center">
       <VideoCarousel 
         videos={videos} 
         userGuesses={userGuesses} 
         isArchive={true}
       />
    </main>
  );
}