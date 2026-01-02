import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { submitGuess } from "@/src/actions";
import { Card } from "@/src/components/Card";
import { Video } from "../lib/definitions";

interface DayCardProps {
  video: Video;
  userGuess?: {
    song_name: string;
  };
  status: "past" | "today";
  isArchive?: boolean;
}

export function DayCard({
  video,
  userGuess,
  status,
  isArchive = false,
}: DayCardProps) {
  const isWrapUp = video.beatId === 32;

  const renderResult = () => (
    <div className="bg-gray-100 border-2 border-gray-300 md:p-6 p-3 rounded-md text-left">
      <h2 className="font-bold text-2xl mb-2">Results</h2>
      <div className="mb-1">
        🎵 The song was:{" "}
        <b className="text-palette-polynesian_blue">{video.songName}</b>
      </div>
    </div>
  );

  return (
    <Card>
      <h1 className="md:text-3xl font-bold md:mb-6 justify-self-center">
        {isWrapUp ? "Wrap Up 🥁" : `Name That Beat - Day ${video.beatId}`}
      </h1>

      {/* VIDEO PLAYER */}
      <div className="flex justify-center w-full md:mb-6 mb-4 mt-3">
        <iframe
          src={`https://www.youtube.com/embed/${video.youTubeId}`}
          title={isWrapUp ? "Wrap Up Video" : `Day ${video.beatId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full max-w-[960px] aspect-video rounded-md"
        ></iframe>
      </div>

      {/* --- LOGIC BRANCHES --- */}

      {isWrapUp ? (
        <div className="p-4 bg-palette-polynesian_blue-900 rounded-md text-palette-night">
          <p className="my-2 justify-self-center text-2xl font-bold">
            Thanks for playing along!
          </p>
        </div>
      ) : isArchive ? (
        renderResult()
      ) : (
        <>
          {/* CASE 1: NOT LOGGED IN */}
          <SignedOut>
            <div className="p-6 rounded-md justify-self-center">
              <SignInButton mode="modal">
                <button className="bg-palette-polynesian_blue text-white px-6 py-2 rounded-md font-bold hover:bg-palette-polynesian_blue-600 transition">
                  Sign In to Play!
                </button>
              </SignInButton>
            </div>
          </SignedOut>

         {/* CASE 2: LOGGED IN */}
          <SignedIn>
            {/* SUB-CASE: PAST DAY */}
            {status === "past" && renderResult()}

            {/* SUB-CASE: TODAY */}
            {status === "today" && (
              <>
                {userGuess ? (
                  <div className="bg-palette-alloy_orange-900 border-2 border-palette-alloy_orange md:p-6 p-3 rounded-md text-palette-night">
                    <div className="md:text-2xl text-xs">
                      Locked in! You guessed:{" "}
                      <b className="uppercase">{userGuess.song_name}</b>
                    </div>
                  </div>
                ) : (
                  <form
                    action={submitGuess}
                    className="flex flex-col gap-3 w-4/5 justify-self-center mx-auto"
                  >
                    <input type="hidden" name="songId" value={video.id} />
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
              </>
            )}

            <div className="mt-3 flex justify-center">
              <UserButton showName={true} />
            </div>
          </SignedIn>
        </>
      )}
    </Card>
  );
}
