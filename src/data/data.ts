import { TrackerData, Leaderboard, Basic, Song } from "./schema";

export const trackerData: TrackerData[] = [
  {
    beatId: 1,
    songTitle: "Come Together",
    correctGuesses: 7,
    totalGuesses: 8,
    tooltip: "87.50",
    status: "Good",
  },
  {
    beatId: 2,
    songTitle: "What's My Age Again?",
    correctGuesses: 7,
    totalGuesses: 9,
    tooltip: "77.78",
    status: "Good",
  },
  {
    beatId: 3,
    songTitle: "In Bloom",
    correctGuesses: 5,
    totalGuesses: 5,
    tooltip: "100.00",
    status: "Perfect",
  },
  {
    beatId: 4,
    songTitle: "Maps",
    correctGuesses: 10,
    totalGuesses: 10,
    tooltip: "100.00",
    status: "Perfect",
  },
  {
    beatId: 5,
    songTitle: "Don't You (Forget About Me)",
    correctGuesses: 11,
    totalGuesses: 14,
    tooltip: "78.57",
    status: "Good",
  },
  {
    beatId: 6,
    songTitle: "Drop It Like It's Hot",
    correctGuesses: 20,
    totalGuesses: 22,
    tooltip: "90.91",
    status: "Great",
  },
  {
    beatId: 7,
    songTitle: "Sugar, We're Goin Down",
    correctGuesses: 25,
    totalGuesses: 28,
    tooltip: "89.29",
    status: "Good",
  },
  {
    beatId: 8,
    songTitle: "Smooth (feat. Rob Thomas)",
    correctGuesses: 21,
    totalGuesses: 21,
    tooltip: "100.00",
    status: "Perfect",
  },
  {
    beatId: 9,
    songTitle: "Sk8er Boi",
    correctGuesses: 14,
    totalGuesses: 19,
    tooltip: "73.68",
    status: "Bad",
  },
  {
    beatId: 10,
    songTitle: "Bye Bye Bye",
    correctGuesses: 11,
    totalGuesses: 13,
    tooltip: "84.62",
    status: "Good",
  },
  {
    beatId: 11,
    songTitle: "Only Human",
    correctGuesses: 9,
    totalGuesses: 12,
    tooltip: "75.00",
    status: "Bad",
  },
  {
    beatId: 12,
    songTitle: "Here It Goes Again",
    correctGuesses: 20,
    totalGuesses: 21,
    tooltip: "95.24",
    status: "Great",
  },
  {
    beatId: 13,
    songTitle: "Never Gonna Give You Up",
    correctGuesses: 16,
    totalGuesses: 19,
    tooltip: "84.21",
    status: "Good",
  },
  {
    beatId: 14,
    songTitle: "Sunday Morning",
    correctGuesses: 17,
    totalGuesses: 19,
    tooltip: "89.47",
    status: "Good",
  },
  {
    beatId: 15,
    songTitle: "Even Flow",
    correctGuesses: 18,
    totalGuesses: 18,
    tooltip: "100.00",
    status: "Perfect",
  },
  {
    beatId: 16,
    songTitle: "Misery Business",
    correctGuesses: 13,
    totalGuesses: 15,
    tooltip: "86.67",
    status: "Good",
  },
  {
    beatId: 17,
    songTitle: "Pretty Fly (For a White Guy)",
    correctGuesses: 15,
    totalGuesses: 16,
    tooltip: "93.75",
    status: "Great",
  },
  {
    beatId: 18,
    songTitle: "Drive",
    correctGuesses: 5,
    totalGuesses: 10,
    tooltip: "50.00",
    status: "Bad",
  },
  {
    beatId: 19,
    songTitle: "Walk This Way",
    correctGuesses: 14,
    totalGuesses: 15,
    tooltip: "93.33",
    status: "Great",
  },
  {
    beatId: 20,
    songTitle: "Bulls On Parade",
    correctGuesses: 14,
    totalGuesses: 15,
    tooltip: "93.33",
    status: "Great",
  },
  {
    beatId: 21,
    songTitle: "Welcome to the Black Parade",
    correctGuesses: 16,
    totalGuesses: 17,
    tooltip: "94.12",
    status: "Great",
  },
  {
    beatId: 22,
    songTitle: "Welcome to the Jungle",
    correctGuesses: 20,
    totalGuesses: 21,
    tooltip: "95.24",
    status: "Great",
  },
  {
    beatId: 23,
    songTitle: "Beautiful Things",
    correctGuesses: 11,
    totalGuesses: 11,
    tooltip: "100.00",
    status: "Perfect",
  },
  {
    beatId: 24,
    songTitle: "24K Magic",
    correctGuesses: 9,
    totalGuesses: 11,
    tooltip: "81.81",
    status: "Good"
  },
    {
      beatId: 25,
      songTitle: "Touch Me",
      correctGuesses: 7,
      totalGuesses: 10,
      tooltip: "70.00",
      status: "Bad",
    },
    {
      beatId: 26,
      songTitle: "D'yer Mak'er",
      correctGuesses: 11,
      totalGuesses: 11,
      tooltip: "100.00",
      status: "Perfect",
    },
];

export const overallGuessLeaderData: Leaderboard[] = [
  {
    name: "scubasav144",
    value: 25,
  },
  {
    name: "shortofadime",
    value: 22,
  },
  {
    name: "mgattoni15",
    value: 21,
  },
  {
    name: "erinnbenedict",
    value: 19,
  },
  {
    name: "peetydraws",
    value: 17,
  }
];

export const decades: Basic[] = [
  {
    value: 1960 | 1961 | 1962 | 1963 | 1964 | 1965 | 1966 | 1967 | 1968 | 1969,
    label: "60s",
  },
  {
    value: 1970 | 1971 | 1972 | 1973 | 1974 | 1975 | 1976 | 1977 | 1978 | 1979,
    label: "70s",
  },
  {
    value: 1980 | 1981 | 1982 | 1983 | 1984 | 1985 | 1986 | 1987 | 1988 | 1989,
    label: "80s",
  },
  {
    value: 1990 | 1991 | 1992 | 1993 | 1994 | 1995 | 1996 | 1997 | 1998 | 1999,
    label: "90s",
  },
  {
    value: 2000 | 2001 | 2002 | 2003 | 2004 | 2005 | 2006 | 2007 | 2008 | 2009,
    label: "2000s",
  },
  {
    value: 2010 | 2011 | 2012 | 2013 | 2014 | 2015 | 2016 | 2017 | 2018 | 2019,
    label: "2010s",
  },
  {
    value: 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 | 2027 | 2028 | 2029,
    label: "2020s",
  },
];

export const topTen: Basic[] = [
  {
    value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    label: "Yes",
  },
  {
    value: 11,
    label: "No",
  },
];

export const songs: Song[] = [
  {
    day: 1,
    song: "Come Together",
    artist: "The Beatles",
    drummer: "Ringo Starr",
    broadGenre: "Rock",
    genre: "Blues rock, swamp rock, rock and roll",
    totalGuesses: 8,
    correctGuesses: 7,
    releaseYear: 1969,
    releaseDecade: "1960s",
    hot100Peak: 1,
  },
  {
    day: 2,
    song: "What's My Age Again?",
    artist: "Blink-182",
    drummer: "Travis Barker",
    broadGenre: "Alternative",
    genre: "Pop-punk",
    totalGuesses: 9,
    correctGuesses: 7,
    releaseYear: 1999,
    releaseDecade: "1990s",
    hot100Peak: 58,
  },
  {
    day: 3,
    song: "In Bloom",
    artist: "Nirvana",
    drummer: "Dave Grohl",
    broadGenre: "Alternative",
    genre: "Grunge",
    totalGuesses: 5,
    correctGuesses: 5,
    releaseYear: 1992,
    releaseDecade: "1990s",
    hot100Peak: null,
  },
  {
    day: 4,
    song: "Maps",
    artist: "Yeah Yeah Yeahs",
    drummer: "Brian Chase",
    broadGenre: "Alternative",
    genre: "Indie rock, art punk, soul",
    totalGuesses: 10,
    correctGuesses: 10,
    releaseYear: 2003,
    releaseDecade: "2000s",
    hot100Peak: 87,
  },
  {
    day: 5,
    song: "Don't You (Forget About Me)",
    artist: "Simple Minds",
    drummer: "Mel Gaynor",
    broadGenre: "Pop",
    genre: "New wave, pop, pop rock, synth-pop",
    totalGuesses: 14,
    correctGuesses: 11,
    releaseYear: 1985,
    releaseDecade: "1980s",
    hot100Peak: 1,
  },
  {
    day: 6,
    song: "Drop It Like It's Hot",
    artist: "Snoop Dogg ft. Pharrell Williams",
    drummer: "The Neptunes (Producers)",
    broadGenre: "Hip Hop/Rap",
    genre: "Hip hop",
    totalGuesses: 22,
    correctGuesses: 20,
    releaseYear: 2004,
    releaseDecade: "2000s",
    hot100Peak: 1,
  },
  {
    day: 7,
    song: "Sugar, We're Goin Down",
    artist: "Fall Out Boy",
    drummer: "Andy Hurley",
    broadGenre: "Alternative",
    genre: "Pop-punk, emo",
    totalGuesses: 28,
    correctGuesses: 25,
    releaseYear: 2005,
    releaseDecade: "2000s",
    hot100Peak: 8,
  },
  {
    day: 8,
    song: "Smooth (feat. Rob Thomas)",
    artist: "Santana",
    drummer: "Rodney Holmes",
    broadGenre: "Alternative",
    genre: "Latin rock, alternative rock",
    totalGuesses: 21,
    correctGuesses: 21,
    releaseYear: 1999,
    releaseDecade: "1990s",
    hot100Peak: 1,
  },
  {
    day: 9,
    song: "Sk8er Boi",
    artist: "Avril Lavigne",
    drummer: "Victor Indrizzo",
    broadGenre: "Alternative",
    genre: "Pop-punk, power pop",
    totalGuesses: 19,
    correctGuesses: 14,
    releaseYear: 2002,
    releaseDecade: "2000s",
    hot100Peak: 10,
  },
  {
    day: 10,
    song: "Bye Bye Bye",
    artist: "NSYNC",
    drummer: "Kristian Lundin and Jake Schulze (Producers)",
    broadGenre: "Pop",
    genre: "Dance-pop",
    totalGuesses: 13,
    correctGuesses: 11,
    releaseYear: 2000,
    releaseDecade: "2000s",
    hot100Peak: 4,
  },
  {
    day: 11,
    song: "Only Human",
    artist: "Jonas Brothers",
    drummer: "Jack Lawless",
    broadGenre: "Pop",
    genre: "Reggae-pop",
    totalGuesses: 12,
    correctGuesses: 9,
    releaseYear: 2019,
    releaseDecade: "2010s",
    hot100Peak: 18,
  },
  {
    day: 12,
    song: "Here It Goes Again",
    artist: "OK Go",
    drummer: "Dan Konopka",
    broadGenre: "Pop",
    genre: "Power pop",
    totalGuesses: 21,
    correctGuesses: 20,
    releaseYear: 2006,
    releaseDecade: "2000s",
    hot100Peak: 38,
  },
  {
    day: 13,
    song: "Never Gonna Give You Up",
    artist: "Rick Astley",
    drummer: "A Linn",
    broadGenre: "Pop",
    genre: "Dance-pop, synth-pop, blue-eyed soul",
    totalGuesses: 19,
    correctGuesses: 16,
    releaseYear: 1987,
    releaseDecade: "1980s",
    hot100Peak: 1,
  },
  {
    day: 14,
    song: "Sunday Morning",
    artist: "Maroon 5",
    drummer: "Ryan Dusick",
    broadGenre: "Alternative",
    genre: "Alternative rock, jazz",
    totalGuesses: 19,
    correctGuesses: 17,
    releaseYear: 2004,
    releaseDecade: "2000s",
    hot100Peak: 31,
  },
  {
    day: 15,
    song: "Even Flow",
    artist: "Pearl Jam",
    drummer: "Dave Krusen",
    broadGenre: "Alternative",
    genre: "Grunge",
    totalGuesses: 18,
    correctGuesses: 18,
    releaseYear: 1992,
    releaseDecade: "1990s",
    hot100Peak: null,
  },
  {
    day: 16,
    song: "Misery Business",
    artist: "Paramore",
    drummer: "Zac Farro",
    broadGenre: "Alternative",
    genre: "Pop-punk, emo, alternative rock, hard rock",
    totalGuesses: 15,
    correctGuesses: 13,
    releaseYear: 2007,
    releaseDecade: "2000s",
    hot100Peak: 26,
  },
  {
    day: 17,
    song: "Pretty Fly (For a White Guy)",
    artist: "The Offspring",
    drummer: "Ron Welty",
    broadGenre: "Alternative",
    genre: "Punk rap, pop-punk, alternative rock, comedy rock",
    totalGuesses: 16,
    correctGuesses: 15,
    releaseYear: 1998,
    releaseDecade: "1990s",
    hot100Peak: 53,
  },
  {
    day: 18,
    song: "Drive",
    artist: "Incubus",
    drummer: "José Pasillas",
    broadGenre: "Alternative",
    genre: "Alternative rock",
    totalGuesses: 10,
    correctGuesses: 5,
    releaseYear: 1999,
    releaseDecade: "1990s",
    hot100Peak: 9,
  },
  {
    day: 19,
    song: "Walk This Way",
    artist: "Aerosmith",
    drummer: "Joey Kramer",
    broadGenre: "Rock",
    genre: "Hard rock, funk rock",
    totalGuesses: 15,
    correctGuesses: 14,
    releaseYear: 1975,
    releaseDecade: "1970s",
    hot100Peak: 10,
  },
  {
    day: 20,
    song: "Bulls On Parade",
    artist: "Rage Against the Machine",
    drummer: "Brad Wilk",
    broadGenre: "Alternative",
    genre: "Alternative rock, nu metal, rap metal, funk metal",
    totalGuesses: 15,
    correctGuesses: 14,
    releaseYear: 1996,
    releaseDecade: "1990s",
    hot100Peak: null,
  },
  {
    day: 21,
    song: "Welcome to the Black Parade",
    artist: "My Chemical Romance",
    drummer: "Bob Bryar",
    broadGenre: "Alternative",
    genre: "Emo, pop-punk, alternative rock, hard rock",
    totalGuesses: 17,
    correctGuesses: 16,
    releaseYear: 2006,
    releaseDecade: "2000s",
    hot100Peak: 9,
  },
  {
    day: 22,
    song: "Welcome to the Jungle",
    artist: "Guns N' Roses",
    drummer: "Steven Adler",
    broadGenre: "Rock",
    genre: "Glam metal, hard rock",
    totalGuesses: 21,
    correctGuesses: 20,
    releaseYear: 1987,
    releaseDecade: "1980s",
    hot100Peak: 7,
  },
  {
    day: 23,
    song: "Beautiful Things",
    artist: "Benson Boone",
    drummer: "Eric Downs",
    broadGenre: "Alternative",
    genre: "Alternative rock, post-grunge, pop rock, power pop",
    totalGuesses: 11,
    correctGuesses: 11,
    releaseYear: 2024,
    releaseDecade: "2020s",
    hot100Peak: 2,
  },
  {
    day: 24,
    song: "24K Magic",
    artist: "Bruno Mars",
    drummer: "The Stereotypes (Producers)",
    broadGenre: "R&B",
    genre: "Funk, disco, R&B",
    totalGuesses: 11,
    correctGuesses: 9,
    releaseYear: 2016,
    releaseDecade: "2010s",
    hot100Peak: 4
  },
  {
    day: 25,
    song: "Touch Me",
    artist: "The Doors",
    drummer: "John Densmore",
    broadGenre: "Rock",
    genre: "Soul, proto-prog, symphonic rock",
    totalGuesses: 10,
    correctGuesses: 7,
    releaseYear: 1968,
    releaseDecade: "1960s",
    hot100Peak: 3
  },
  {
    day: 26,
    song: "D'yer Mak'er",
    artist: "Led Zeppelin",
    drummer: "John Bonham",
    broadGenre: "Rock",
    genre: "Reggae rock",
    totalGuesses: 11,
    correctGuesses: 11,
    releaseYear: 1973,
    releaseDecade: "1970s",
    hot100Peak: 20
  }
];
