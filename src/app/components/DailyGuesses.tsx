"use server";

import {
  Table,
  TableRow,
  TableBody,
  TableCell
} from "./ui/table";
import { fetchDailyGuesses } from "../lib/data";

interface DailyGuessesProps {
  day: number;
}

export default async function DailyGuesses({ day }: DailyGuessesProps) {
  const guesses = await fetchDailyGuesses({ day });

  return (
    <Table className="w-full h-1/2">
      <TableBody className="text-md">
        {guesses.map((guess) => (
          <TableRow key={guess.username}>
            <TableCell>
              {guess.correct ? (
                <span aria-label="correct" role="img">
                  🤘
                </span>
              ) : (
                <span aria-label="incorrect" role="img">
                  👎
                </span>
              )}
            </TableCell>
            <TableCell>
              <div className="font-bold">{guess.username}</div>
              {guess.guess}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
