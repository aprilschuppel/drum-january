import DayCarousel from "./components/DayCarousel";

export default function Home() {
  
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-2 md:p-10">
       <div className="flex w-full md:max-w-[50%] sm:w-full flex-col gap-6">
        <DayCarousel />
      </div>
    </div>
  );
}