"use client";
import React from "react";
import {
  decadeGuesses,
  billboardGuesses,
} from "@/src/data/data";
import { BarChart } from "@/src/components/BarChart";

import { DetailedTracker } from "@/src/components/Tracker";
import { BarList } from "@/src/components/BarList";
import { trackerData, overallGuessLeaderData } from "@/src/data/data";

export function DailyCorrectTracker() {
  const colorMapping = {
    Perfect: "bg-palette-jade",
    Great: "bg-palette-jade-600",
    Good: "bg-palette-sunset-600",
    Bad: "bg-palette-blood_red-800",
    Unknown: "bg-palette-sunset",
  };

  const detailedData = trackerData.map((item) => {
    return {
      date: `Day ${item.beatId}`,
      tooltip: item.songTitle,
      description: `${item.status}: ${item.correctGuesses}/${item.totalGuesses} (${item.tooltip}%)`,
      color: colorMapping[item.status],
    };
  });

  return (
    <div>
      <h3 className="mb-1 font-bold">Daily Correct Guess Percentage</h3>
      <DetailedTracker data={detailedData} />
    </div>
  );
}

export function OverallLeaders() {
  const data = overallGuessLeaderData;

  return (
    <div>
      <h3 className="mb-1 font-bold">Overall Correct Guess Leaders</h3>
      <BarList data={data} />
    </div>
  );
}

export function ChartAccuracy() {
  return (
    <div>
      <h3 className="mb-1 font-bold">
        Average Guesses by Hot 100 Peak Chart Position
      </h3>
      <BarChart
        data={billboardGuesses}
        index="index"
        categories={["avgCorrect", "avgGuesses"]}
      />{" "}
    </div>
  );
}

export function DecadeAccuracy() {
  return (
    <div>
      <h3 className="mb-1 font-bold">Average Guesses by Decade</h3>
      <BarChart
        data={decadeGuesses}
        index="decade"
        categories={["avgCorrect", "avgGuesses"]}
      />
    </div>
  );
}
