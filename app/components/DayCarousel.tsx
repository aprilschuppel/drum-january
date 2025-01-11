import * as React from 'react';

export const dynamic = "force-dynamic";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "./ui/carousel";
import Image from "next/image";
import DailyGuesses from "./DailyGuesses";
import { fetchVideos } from '../lib/data';

const videos = await fetchVideos();

export default function DayCarousel() {
  const startIndex = videos.length - 1;

  return (
    <Carousel className="w-full h-screen" opts={{ loop: true, startIndex: startIndex}}>
      <CarouselContent>
        {Array.from({ length: videos.length }).map((_, index) => (
          <CarouselItem key={index} className={`${index === index ? 'basis-4/5' : 'basis-1/10'}`}>
            <div>
              <Card className="h-full md:h-auto">
              <CardHeader className="text-center">
                  <Image className="self-center"
                    aria-hidden
                    src="/drum-january-logo-circle.png"
                    alt="Drum January logo"
                    width={150}
                    height={150}
                  />
                  <div className="text-2xl">Welcome to Day {videos[index].beatId}!</div>
                  {
                    index === 0 ? (
                      <p>Here&apos;s the first video of Drum January 2025!</p>
                    ) : (
                      <p>Here&apos;s the reveal of Day {videos[index].beatId - 1}&apos;s song and Day {videos[index].beatId}&apos;s beat to guess!</p>
                    )
                  }
                  <div className="flex justify-center w-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${videos[index].youTubeId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full max-w-[560px] h-48 md:h-64 lg:h-96"
                    ></iframe>
                  </div>
                  <br/>
                  {
                    index + 1 === videos.length ? (
                      <p className="top font-bold">There&apos;s still time to guess Day {index + 1}&apos;s beat!</p>
                    ) : (
                      <div className="top font-bold">Day {index + 1} Guesses<br/><br/><hr/></div>
                      
                    )
                  }
                </CardHeader>
                {
                    index + 1 === videos.length ? (
                      null
                    ) : (
                      
                      <CardContent className="flex aspect-square  mt-0 overflow-y-auto">
                        <DailyGuesses day={index + 1 } />
                      </CardContent>
                    )
                  }
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}