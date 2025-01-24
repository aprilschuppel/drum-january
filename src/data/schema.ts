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