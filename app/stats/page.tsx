import Link from "next/link";
import { DrumJanuaryLeaderboard } from "../components/Leaderboard";
import { SongStats } from "../components/SongStats";
import { SiteFooter } from "../components/Footer";

export default function Home() {
  
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 bg-muted p-2 md:p-10">
       <div className="flex w-full md:max-w-[50%] sm:w-full h-screen md:h-auto flex-col gap-6">
       <Link key='home' href='/'
        className="flex h-2 mb-2 grow items-center justify-center p-3 font-medium text-blue-700 text-center">  
            Back to the home page!
        </Link>
        <DrumJanuaryLeaderboard />
        <SongStats />
        <SiteFooter />
      </div>
    </div>
  );
}