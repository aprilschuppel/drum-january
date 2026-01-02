import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { DayCard } from "./DayCard";
import { Video, UserGuess } from "../lib/definitions";

interface VideoCarouselProps {
  videos: Video[];
  userGuesses: UserGuess[];
    isArchive?: boolean;
}

export function VideoCarousel({ videos, userGuesses, isArchive = false }: VideoCarouselProps) {
  const latestVideoCount = videos.length;

  return (
    <Carousel
      className="w-full max-w-[960px]"
      opts={{ startIndex: Math.max(0, latestVideoCount - 1), loop: true }}
    >
      <CarouselContent>
        {videos.map((video) => {
          const status = video.beatId === latestVideoCount ? "today" : "past";
          const guessForThisDay = userGuesses.find(
            (g) => g.video_id === video.id
          );

          return (
            <CarouselItem key={video.id}>
              <div className="p-1">
                <DayCard
                  video={video}
                  userGuess={guessForThisDay}
                  status={status}
                  isArchive={isArchive}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {videos.length > 1 && (
        <>
          <CarouselPrevious className="left-2 md:-left-12 md:size-12 border-2 text-palette-polynesian_blue border-palette-polynesian_blue" />
          <CarouselNext className="right-2 md:-right-12 md:size-12 border-2 text-palette-polynesian_blue border-palette-polynesian_blue" />
        </>
      )}
    </Carousel>
  );
}
