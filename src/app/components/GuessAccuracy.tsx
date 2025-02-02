"use client";

import React from "react";
import { songs, yearGuesses, decadeGuesses, billboardGuesses } from "@/src/data/data";
import { LineChart, TooltipProps } from "@/src/components/LineChart";
import { BarChart } from "@/src/components/BarChart";

export default function TestPage() {
  const [datas, setDatas] = React.useState<TooltipProps | null>(null);

  const payload = datas?.payload?.[0]?.payload;
  const tooltip = payload ? `${payload?.song} by ${payload?.artist}` : "";

  return (
    <div>
    <p>Billboard Guesses</p>
    <BarChart 
        data={billboardGuesses}
        index="index"
        categories={["avgCorrect", "avgGuesses"]}
    />
        <p>Decade Guesses</p>
        <BarChart 
            data={decadeGuesses}
            index="decade"
            categories={["avgCorrect", "avgGuesses"]}
        />
        <p>Year Guesses</p>
        <LineChart 
        data={yearGuesses}
        index={"releaseYear"}
        categories={["avgCorrectGuesses", "avgTotalGuesses"]}/>
      <p className="text-sm text-gray-700 dark:text-gray-300">Song</p>
      <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-50">
        {tooltip}
      </p>
      <LineChart
        data={songs}
        index={"hot100Peak"}
        categories={["totalGuesses", "correctGuesses"]}
        showLegend={false}
        showYAxis={false}
        className="-mb-2 mt-8 h-48"
        tooltipCallback={(props) => {
            console.log(props);

            if (props.active) {
                setDatas((prev) => {
                    if (prev?.label === props.label) return prev
                    return props
                })
            } else {
                setDatas(null)
            }
            return null
        }}
      />
    </div>
  );
}
