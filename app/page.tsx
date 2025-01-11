import DayCarousel from "./components/DayCarousel";

export default function Home() {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted p-2 md:p-10">
       <div className="flex w-full md:max-w-[50%] sm:w-full h-screen md:h-auto flex-col gap-6">
        <DayCarousel />
      </div>
    </div>
  );
}