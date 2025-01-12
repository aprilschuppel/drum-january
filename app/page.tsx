import Link from "next/link";
import DayCarousel from "./components/DayCarousel";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted">
      <div className="flex w-full md:max-w-[70%] sm:w-full h-screen md:h-auto flex-col">
        <Link key='stats' href='/stats'
          className="flex h-2 mb-2 grow items-center justify-center p-3 font-medium text-blue-700 text-center">            
          Check out the stats!
        </Link>
        <DayCarousel />
      </div>
    </div>
  );
}