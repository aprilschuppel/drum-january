import * as React from "react";

import { Card, CardContent, CardHeader } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import DailyGuesses from "./DailyGuesses";
import { fetchVideos } from "../lib/data";
import { GuessInput } from "./GuessInput";

const videos = await fetchVideos();

export default function DayCarousel() {
  const startIndex = videos.length - 1;

  return (
    <Carousel
      className="w-full h-full"
      opts={{ loop: true, startIndex: startIndex }}
    >
      <CarouselContent>
        {Array.from({ length: videos.length }).map((_, index) => (
          <CarouselItem
            key={index}
            className={`h-full w-full ${
              index === index ? "basis-4/5" : "basis-1/10"
            }`}
          >
            <Card className="h-auto">
              <CardHeader className="text-center text-palette-polynesian_blue-200">
                <div className="text-2xl">
                  Welcome to Day {videos[index].beatId}!
                </div>
                {index === 0 ? (
                  <p className="text-sm">
                    Here&apos;s the first video of Drum January 2025!
                  </p>
                ) : (
                  <p className="text-sm">
                    Here&apos;s the reveal of Day {videos[index].beatId - 1}
                    &apos;s song and Day {videos[index].beatId}&apos;s beat to
                    guess!
                  </p>
                )}

                {/* video */}
                <div className="flex justify-center w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${videos[index].youTubeId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full max-w-[960px] aspect-video"
                  ></iframe>
                </div>
                <br/>
                
                {/* guess box */}
                {index + 1 === videos.length ? (
                  <>
                    <p className="top font-bold mt-2">
                      There&apos;s still time to guess Day {index + 1}&apos;s
                      beat!
                    </p>
                    <div className="w-4/5 justify-center self-center">
                      <GuessInput
                        beatId={index + 1}
                        beatDate={`2025-01-${index + 1}`}
                        platform="DJ App"
                      />
                    </div>
                    <br />
                    <br />
                  </>
                ) : (
                  null
                )}
              </CardHeader>
              {index + 1 === videos.length ? null : (
                <CardContent className="flex aspect-square  mt-0 overflow-y-auto">
                  <DailyGuesses day={index + 1} />
                </CardContent>
              )}
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
