export type GuessTableRow = {
    username: string;
    guess: string;
    correct: boolean;
};

export type Video = {
    id: number;
    beatId: number;
    postDate: string;
    songName: string;
    songArtist: string;
    songDrummer: string;
    youTubeId: string;
    genre: string;
    releaseYear: number;
    peakOnBillboardChart: number;
}

export type User = {
    id: string;
    name: string;
    username: string;
    platform: string;
    email: string;
    password: string;
  };

export type Guess = {
    beatId: number;
    beatDate: string;
    username: string;
    guess: string;
    platform: string;
}