"use server";

import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./ui/table";
import { fetchDailyGuesses } from "../lib/data";

interface DailyGuessesProps {
    day: number;
};

export default async function DailyGuesses({ day }: DailyGuessesProps) {
    const guesses = await fetchDailyGuesses({ day });

    return (
        <Table>
            <TableCaption>
                Day {day} had {guesses.length} guesses!
                <br />
                <br />
                <hr />
                <br />
                Drum January is an annual daily drumming challenge by April Schuppel. In years past, April has just performed a full drum cover or original groove each day.
                <br />
                <br />For 2025, Drum January has evolved to a daily guessing game. Each day, she plays a beat and gives people 24 hours to guess what song it&apos;s from. The following day, the previous day&apos;s song is revealed and a new beat is posted.
                <br />
                <br />To play along, follow April on Instagram at <a href="https://www.instagram.com/schupsss/">@schupsss</a> or YouTube at <a href="https://www.youtube.com/@aprilschuppel">@aprilschuppel</a>.
                <br />
            </TableCaption>
            <TableHeader className="text-md">
                <TableRow >
                    <TableHead></TableHead>
                    <TableHead className="font-bold">USERNAME</TableHead>
                    <TableHead className="font-bold">GUESS</TableHead>
                </TableRow>
            </TableHeader>
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
                        <TableCell className="font-large">{guess.username}</TableCell>
                        <TableCell>{guess.guess}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}