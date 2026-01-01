// src/components/TopNav.tsx
'use client'

import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button 
} from "@heroui/react";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function TopNav() {
  return (
    <Navbar maxWidth="xl" position="sticky" className="bg-palette-polynesian_blue" >
      <NavbarBrand>
          <Image
                        alt="Drum January Logo"
                        src="/drum-january-logo-circle.png"
                        width={64}
                        height={64}
                      />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="2025">
            2025
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Today's Beat
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {/* CASE 1: User is Logged OUT */}
        <SignedOut>
          <NavbarItem>
            {/* We wrap the HeroUI Button with Clerk's logic */}
            <SignInButton mode="modal">
              <Button color="primary" variant="flat" className="cursor-pointer">
                Sign In
              </Button>
            </SignInButton>
          </NavbarItem>
        </SignedOut>

        {/* CASE 2: User is Logged IN */}
        <SignedIn>
          <NavbarItem>
            <UserButton afterSignOutUrl="/"/>
          </NavbarItem>
        </SignedIn>
      </NavbarContent>
    </Navbar>
  );
}