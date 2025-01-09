export type Guess = {
    id: number;
    beatId: number;
    beatDate: string;
    username: string;
    guess: string;
    platform: string;
    correct: "TRUE" | "FALSE";
  };