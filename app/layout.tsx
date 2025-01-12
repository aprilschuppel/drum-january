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
      <body className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
