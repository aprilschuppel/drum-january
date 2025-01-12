'use client'

import { Table } from '@tinybirdco/charts'

export function SongStats() {
  return (
    <Table
      endpoint={`${process.env.NEXT_PUBLIC_TB_BASE_URL}/v0/pipes/song_stats.json`}
      token = {process.env.NEXT_PUBLIC_TB_SONG_STATS_TOKEN}
      categories={['song', 'wins', 'year', 'chartPeak', 'genre']}
      fontSize="12px"
      fontFamily="Helvetica"
      textColor="#100f0d"
      height="500px"
      borderRadius="5px"
      padding="10px"
    />
  )
}