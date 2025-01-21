'use client'

import { Table } from '@tinybirdco/charts'

export function SongStats() {
  return (
    <Table
      endpoint={`${process.env.NEXT_PUBLIC_TB_BASE_URL}/v0/pipes/song_stats.json`}
      token={process.env.NEXT_PUBLIC_TINYBIRD_TOKEN}
      categories={['wins', 'song', 'year', 'chartPeak', 'genre']}
      fontSize="10px"
      fontFamily="Helvetica"
      textColor="#100f0d"
      height="500px"
      borderRadius="4px"
      borderColor="#064789"
      padding="10px"
      title="Songs by Wins"
    />
  )
}

export function SongsByDay() {
  return (
    <Table
      endpoint={`${process.env.NEXT_PUBLIC_TB_BASE_URL}/v0/pipes/songs.json`}
      token={process.env.NEXT_PUBLIC_TINYBIRD_TOKEN}
      categories={['day', 'song', 'chartPeak', 'releaseYear',  'wins', 'genre']}
      title="Songs by Day"
      height="500px"
      borderRadius="4px"
      borderColor="#064789"
      padding="10px"
      fontSize={"10px"}
    />
  )
}