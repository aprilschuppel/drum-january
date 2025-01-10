import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card"
import { fetchLatestGuesses } from "./lib/data";

const guesses = await fetchLatestGuesses();


export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-2 md:p-10">
      <div className="flex w-full md:max-w-[50%] sm:w-full flex-col gap-6">
        <Card className="w-full">
          <CardHeader className="text-center">
            <br />
            <Image className="self-center"
              aria-hidden
              src="/drum-january-logo-circle.png"
              alt="Drum January logo"
              width={200}
              height={200}
            />
            <br />
            <div className="flex justify-center w-full">
              <iframe
                src="https://www.youtube.com/embed/LrtxOnu3DW8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full max-w-[560px] h-48 md:h-64 lg:h-96"
              ></iframe>
            </div>
            <br />
            Day 8 had {guesses.length} guesses!
            <br />
          </CardHeader>
          <CardContent>
            <Table className="w-full">
              <TableCaption>
                <br />
                <br />
                <br />
                <hr />
                <br />
                Drum January is an annual daily drumming challenge by April Schuppel. In years past, April has just performed a full drum cover or original groove each day.
                <br/>
                <br/>For 2025, Drum January has evolved to a daily guessing game. Each day, she plays a beat and gives people 24 hours to guess what song it&apos;s from. The following day, the previous day&apos;s song is revealed and a new beat is posted.
                <br/>
                <br/>To play along, follow April on Instagram at <a href="https://www.instagram.com/schupsss/">@schupsss</a> or YouTube at <a href="https://www.youtube.com/@aprilschuppel">@aprilschuppel</a>.
                <br/>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}