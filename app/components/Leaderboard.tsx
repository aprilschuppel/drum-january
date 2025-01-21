"use client";

import { BarList } from "@tinybirdco/charts";
import { Table } from "@tinybirdco/charts";

export function GuessLeaders() {
  return (
    <BarList
      endpoint={`${process.env.NEXT_PUBLIC_TB_BASE_URL}/v0/pipes/guess_leaderboard.json`}
      token={process.env.NEXT_PUBLIC_TINYBIRD_TOKEN}
      index="username"
      categories={["wins"]}
      colorPalette={[
        "#fed19c"
      ]}
      borderRadius="4px"
      borderColor="#064789"
      fontSize="12px"
      fontFamily="Helvetica"
      textColor="#100F0D"
      height="300px"
      padding="10px"
      title="Guess Leaders"
    />
  );
}

export function GenreLeaders(params: { genre?: string }) {
  return (
    <Table
      endpoint={`${process.env.NEXT_PUBLIC_TB_BASE_URL}/v0/pipes/genre_leaderboard.json`}
      token={process.env.NEXT_PUBLIC_TINYBIRD_TOKEN}
      categories={["leaders"]}
      title={params.genre}
      height="300px"
      params={params}
      borderRadius="4px"
      borderColor="#064789"
      fontSize="12px"
      fontFamily="Helvetica"
      textColor="#100F0D"
      padding="10px"
      
    />
  );
}
