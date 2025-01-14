import * as React from 'react';

import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "./ui/carousel";
import Image from "next/image";
import DailyGuesses from "./DailyGuesses";
import { fetchVideos } from '../lib/data';
import { GuessInput } from './GuessInput';

const videos = await fetchVideos();

export default function DayCarousel() {
  const startIndex = videos.length - 1;

  return (
    <Carousel className="w-full h-screen" opts={{ loop: true, startIndex: startIndex}}>
      <CarouselContent>
        {Array.from({ length: videos.length }).map((_, index) => (
          <CarouselItem key={index} className={`w-full ${index === index ? 'basis-4/5' : 'basis-1/10'}`}
          >
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
                      <p className="text-sm">Here&apos;s the first video of Drum January 2025!</p>
                    ) : (
                      <p className="text-sm">Here&apos;s the reveal of Day {videos[index].beatId - 1}&apos;s song and Day {videos[index].beatId}&apos;s beat to guess!</p>
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
                      <>
                        <p className="top font-bold">There&apos;s still time to guess Day {index + 1}&apos;s beat!</p>
                        <br />
                        <div className="w-2/3 justify-center self-center"><GuessInput beatId={index + 1} beatDate={`2025-01-${index + 1}`} platform='DJ App' /></div>
                        <br />
                        <hr />
                        <br />
                        <div className="text-xs text-gray-500">
                          Drum January is an annual daily drumming challenge by April Schuppel. <br/>
                          <br />For 2025, Drum January has evolved to a daily guessing game. Each day, she plays a beat and gives people 24 hours to guess what song it&apos;s from. The following day, the previous day&apos;s song is revealed and a new beat is posted.
                          <br />
                          <br />To play along, follow April on Instagram at <a href="https://www.instagram.com/schupsss/">@schupsss</a> or YouTube at <a href="https://www.youtube.com/@aprilschuppel">@aprilschuppel</a>.
                          <br />
                        </div>
                      </>
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