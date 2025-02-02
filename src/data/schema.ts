export type TrackerData = {
  beatId: number;
  songTitle: string;
  correctGuesses: number;
  totalGuesses: number;
  tooltip: string;
  status: Status;
};

export type Status = 'Bad' | 'Good' | 'Great' | 'Perfect';

export type Leaderboard = {
    name: string;
    value: number;
}

export type Basic = {
  value: string | number,
  label: string
}

export type Song = {
  day: number,
  song: string,
  artist: string,
  drummer: string,
  broadGenre: string,
  genre: string,
  totalGuesses: number,
  correctGuesses: number,
  releaseYear: number,
  releaseDecade: string,
  hot100Peak: number | null
}

export type YearGuess = {
  releaseYear: number,
  numSongs: number,
  avgTotalGuesses: number,
  avgCorrectGuesses: number,
  avgHot100peak: number
}

export type DecadeGuess = {
  decade: string,
  songs: number,
  totalGuesses: number,
  correctGuesses: number,
  avgGuesses: number,
  avgCorrect: number,
  accuracy: number
}

export type Billboard = {
  range: string,
  numSongs: number,
  avgGuesses: number,
  avgCorrect: number,
  accuracy: number
}

export type BarChart = {
  index: string,
  songs: number,
  totalGuesses: number,
  correctGuesses: number,
  avgGuesses: number,
  avgCorrect: number,
  accuracy: number
}