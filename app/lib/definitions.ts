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