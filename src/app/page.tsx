import { auth} from "@clerk/nextjs/server";
import { sql } from "@vercel/postgres";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { submitGuess, fetchCurrentVideo } from "../actions";
import { Card } from "../components/Card";

const video = await fetchCurrentVideo();
console.log(video)

export default async function DrumChallenge() {
  // 1. Get current user
  const { userId } = await auth();
  console.log(userId);

  // 2. Check if they have already guessed today
  // (If not logged in, existingGuess will be undefined)
  let existingGuess = null;
  if (userId) {
    const { rows } =
      await sql`SELECT * FROM user_guesses WHERE user_id = ${userId} LIMIT 1`;
    existingGuess = rows[0];
  }

  return (
    <main className="max-w-full mx-auto text-center text-palette-night font-sans">
      <Card>
        <h1 className="md:text-3xl font-bold md:mb-6 mb-3 justify-self-center">
          Drum January 2026: Day 1
        </h1>

        {/* video */}
        <div className="flex justify-center w-full md:mb-6 mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${video[0].youTubeId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full max-w-[960px] aspect-video"
          ></iframe>
        </div>

        {/* AUTH STATE 1: NOT LOGGED IN */}
        <SignedOut>
          <div className="p-6 rounded-md align-middle justify-self-center">
            <SignInButton mode="modal">
              <button className="bg-palette-polynesian_blue text-white px-6 py-2 rounded-md font-bold hover:bg-palette-polynesian_blue-600 transition">
                Sign In to Guess!
              </button>
            </SignInButton>
          </div>
        </SignedOut>

        {/* AUTH STATE 2: LOGGED IN */}
        <SignedIn>

          {existingGuess ? (
            // STATE 2A: ALREADY GUESSED
            <div className="bg-palette-alloy_orange-900 border-2  border-palette-alloy_orange md:p-6 p-3 rounded-md text-palette-night">
              <div className="md:text-2xl text-xs">
                Locked in! You guessed:{" "}
                <b className="uppercase">{existingGuess.song_name}</b>
              </div>
            </div>
          ) : (
            // STATE 2B: NEEDS TO GUESS
            <form
              action={submitGuess}
              className="flex flex-col gap-3 w-4/5 justify-self-center"
            >
              <input type="hidden" name="songId" value={video[0].id} />
              <input
                name="song"
                type="text"
                placeholder="What song is this?"
                required
                className="border p-3 rounded-md text-lg text-center"
              />
              <button
                type="submit"
                className="bg-palette-polynesian_blue text-white p-3 rounded-md font-bold text-lg hover:bg-palette-polynesian_blue-600"
              >
                Lock in Guess 🔒
              </button>
            </form>
          )}
          <div className="mt-3 flex justify-center">
            <UserButton showName={true} />
          </div>
        </SignedIn>
      </Card>
    </main>
  );
}
