import { GuessLeaders, GenreLeaders } from "../components/Leaderboard";

const genres = ["Pop", "Punk", "Rock"];

export default function Leaderboard() {
  return (
    <div className="flex min-h-screen flex-col items-center p-2 md:p-10">
      <div className="flex w-full md:max-w-[50%] sm:w-full h-screen md:h-auto flex-col gap-6">
      <GuessLeaders />
      <div className="columns-3 gap-1 pt-10">
        {genres.map((genre) => (
          <div className='col' key={genre}>
            <GenreLeaders genre={genre} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
