'use client'

import { BarList } from '@tinybirdco/charts'

export function DrumJanuaryLeaderboard() {
  return (
    <BarList
      endpoint={`${process.env.NEXT_PUBLIC_TB_BASE_URL}/v0/pipes/guess_leaderboard.json`}
      token = {process.env.NEXT_PUBLIC_TB_GUESS_LEADERBOARD_TOKEN}
      index="username"
      categories={['wins']}
      colorPalette={['#FFB05C', 'FFB05C', '#0EB1B9', '#9263AF', '#5A6FC0', '#86BFDB', '#FFC145', '#FF6B6C', '#DC82C8', '#FFC0F1', '064789']}
      borderRadius="5px"
      fontSize="12px"
      fontFamily="Helvetica"
      textColor="#100F0D"
      height="400px"
      padding="10px"
    />
  )
}