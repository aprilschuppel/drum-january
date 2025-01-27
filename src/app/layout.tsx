import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { SiteFooter } from "./components/Footer";
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
      <body className="min-h-screen flex flex-col bg-palette-sunset-900 mt-24">
        <NavBar />
        <div className="py-4">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
