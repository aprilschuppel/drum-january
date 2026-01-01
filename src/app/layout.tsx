// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar, NavbarBrand } from "@heroui/navbar";
import Image from "next/image";

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
                <Image
                  alt="Drum January Logo"
                  src="/drum-january-logo-circle.png"
                  width={64}
                  height={64}
                />
                <p className="text-2xl font-bold text-inherit pl-2">Drum January</p>
              </NavbarBrand>
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
