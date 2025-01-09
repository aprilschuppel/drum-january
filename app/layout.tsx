import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Drum January",
  description: "April Schuppel's annual daily drumming challenge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      >
        {children}
      </body>
    </html>
  );
}
