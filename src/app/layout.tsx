// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./components/NavLinks";

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
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen flex flex-col bg-palette-sunset-900 text-white">
          <Providers>
            <Navbar
              maxWidth="full"
              position="sticky"
              className="bg-palette-polynesian_blue"
            >
              <NavbarBrand>
                <Link href="/">
                <Image
                  alt="Drum January Logo"
                  src="/drum-january-logo-circle.png"
                  width={64}
                  height={64}
                />         
                </Link>     
                <Link href="/"><p className="md:text-2xl font-bold text-inherit pl-2">Drum January</p></Link>
              </NavbarBrand>
              <NavbarContent justify="end" className="gap-6">
                <NavLinks />
              </NavbarContent>
            </Navbar>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-1 py-2 md:px-6 md:py-8">
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
