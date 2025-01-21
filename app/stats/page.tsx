
import { SongStats, SongsByDay } from "../components/SongStats";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-2 md:p-10">
      <div className="flex w-full md:max-w-[50%] sm:w-full h-screen md:h-auto flex-col gap-6">
        <SongsByDay />
        <SongStats />
      </div>
    </div>
  );
}
