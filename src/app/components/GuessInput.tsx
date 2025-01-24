'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { createGuess, State } from '../lib/actions'; // Adjust path if needed

export function GuessInput({ beatId, beatDate, platform }: { beatId: number; beatDate: string, platform: string }) {
  const initialState: State = { message: null, errors: {} };
  const [state, setState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    // Log form data (optional)
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const newState = await createGuess(state, { formData, beatId, beatDate, platform });

    setState(newState);
    setSubmitted(true);
  };

  return (
    <div>
       {submitted ? (
          <div>
            <p>Thanks for your guess!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username (for leaderboard)"
            className="w-full rounded border px-3 py-2"
          />
          <textarea
            name="guess"
            placeholder="What song do you think this is from?"
            className="w-full rounded border px-3 py-2"
          />
          <Button type="submit">Submit your guess!</Button>
        </form>
        )}
    </div>
    
  );
}