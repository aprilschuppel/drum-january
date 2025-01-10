import * as React from 'react';

import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import DailyGuesses from "./DailyGuesses";

const videos = [
  { day: 1, videoId: "baHqPF7GumQ" },
  { day: 2, videoId: "36IhBy7xbAw" },
  { day: 3, videoId: "8GQQAlQXdlU" },
  { day: 4, videoId: "0B7qUH50yK0" },
  { day: 5, videoId: "H1qC-39MIA0" },
  { day: 6, videoId: "fOflCv3RdiU" },
  { day: 7, videoId: "R5cFMQE5SdQ" },
  { day: 8, videoId: "0t7NWfRaDq8" },
  { day: 9, videoId: "LrtxOnu3DW8" },
  { day: 10, videoId: "Hfm94aHAbYQ" },
];

export default function DayCarousel() {
  const startIndex = videos.length - 1;

  return (
    <Carousel className="w-full" opts={{ loop: true, startIndex: startIndex}}>
      <CarouselContent>
        {Array.from({ length: videos.length }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
              <CardHeader className="text-center">
                  <br />
                  <Image className="self-center"
                    aria-hidden
                    src="/drum-january-logo-circle.png"
                    alt="Drum January logo"
                    width={200}
                    height={200}
                  />
                  <br />
                  <div className="text-2xl">Welcome to Day {videos[index].day}!</div>
                  <br />
                  {
                    index === 0 ? (
                      <p>Here&apos;s the first video of Drum January 2025!</p>
                    ) : (
                      <p>Here&apos;s the reveal of Day {videos[index].day - 1}&apos;s song and Day {videos[index].day}&apos;s beat to guess!</p>
                    )
                  }
                  <br />
                  <div className="flex justify-center w-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${videos[index].videoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full max-w-[560px] h-48 md:h-64 lg:h-96"
                    ></iframe>
                  </div>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {
                    index + 1 === videos.length ? (
                      <p>There&apos;s still time to guess Day {index + 1}&apos;s beat!</p>
                    ) : (
                      <DailyGuesses day={index + 1 } />
                    )
                  }
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}