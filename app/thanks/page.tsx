import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center p-2 md:p-10">
      <div className="flex w-full md:max-w-[50%] sm:w-full h-screen md:h-auto flex-col gap-6">
        {" "}
        <Card>
          <CardHeader className="justify-center items-center">
            <CardTitle className="text-xl">Thanks for submitting!</CardTitle>
            <CardDescription>
              <br />
              Check back for the reveal and tomorrow&apos;s challenge.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              key="home"
              href="/"
              className="flex h-2 mb-2 grow items-center justify-center p-3 text-blue-700 text-center"
            >
              Back to the home page
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
