import { auth, currentUser } from '@clerk/nextjs/server'
import { sql } from '@vercel/postgres'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { submitGuess } from '@/src/actions'

export default async function CurrentDay() {
  // 1. Get current user
  const { userId } = await auth()
  
  // 2. Check if they have already guessed today
  // (If not logged in, existingGuess will be undefined)
  let existingGuess = null;
  if (userId) {
    const { rows } = await sql`SELECT * FROM user_guesses WHERE user_id = ${userId} LIMIT 1`
    existingGuess = rows[0]
  }

  return (
    <main className="max-w-md mx-auto p-10 text-center font-sans">
      <h1 className="text-3xl font-bold mb-6">🥁 Drum Jan '26: Day 1</h1>
      
      {/* LISTEN TO THE BEAT */}
      <div className="bg-gray-100 p-6 rounded-xl mb-8">
        <p className="mb-2 text-gray-500">Listen to the beat:</p>
        <audio controls className="w-full">
          <source src="/day1-beat.mp3" type="audio/mpeg" />
        </audio>
      </div>

      {/* AUTH STATE 1: NOT LOGGED IN */}
      <SignedOut>
        <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl">
          <p className="mb-4">Log in to track your streak!</p>
          <SignInButton mode="modal">
            <button className="bg-black text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-800 transition">
              Sign In to Guess the Song!
            </button>
          </SignInButton>
        </div>
      </SignedOut>

      {/* AUTH STATE 2: LOGGED IN */}
      <SignedIn>
        <div className="mb-6 flex justify-center">
            <UserButton />
        </div>

        {existingGuess ? (
          // STATE 2A: ALREADY GUESSED
          <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-green-800">
            <h2 className="font-bold text-xl mb-2">✅ Locked In!</h2>
            <p>You guessed:</p>
            <p className="text-2xl font-black mt-1 uppercase">{existingGuess.song_name}</p>
            <p className="text-sm mt-4 opacity-75">Come back tomorrow to see if you were right.</p>
          </div>
        ) : (
          // STATE 2B: NEEDS TO GUESS
          <form action={submitGuess} className="flex flex-col gap-3">
            <input 
              name="song" 
              type="text" 
              placeholder="What song is this?" 
              required
              className="border p-3 rounded-lg text-lg text-center"
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white p-3 rounded-lg font-bold text-lg hover:bg-blue-700"
            >
              Lock in Guess 🔒
            </button>
          </form>
        )}
      </SignedIn>
    </main>
  )
}