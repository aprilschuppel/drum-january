import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-top bg-muted p-16">
            <Card>
                    <CardHeader className="justify-center items-center">
                        <CardTitle className="text-xl">Thanks for submitting!</CardTitle>
                        <CardDescription><br/>Check back for the reveal and tomorrow&apos;s challenge.</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Link key='home' href='/' className="flex h-2 mb-2 grow items-center justify-center p-3 text-blue-700 text-center">  
                        Back to the home page
                    </Link>
                    </CardContent>
                </Card>
        </div>
    );
}