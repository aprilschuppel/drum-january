"use client";

import { usePathname } from "next/navigation";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Song Stats", href: "/stats" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="bg-palette-polynesian_blue w-full fixed top-0 z-10"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* logo */}
            <div className="flex shrink-0 items-center">
              <Image
                alt="Drum January Logo"
                src="/drum-january-logo-circle.png"
                width={64}
                height={64}
              />
            </div>

            {/* links */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 itms-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={
                      pathname === item.href ||
                      (item.href === "/profile" &&
                        pathname.startsWith("/profile"))
                        ? "page"
                        : undefined
                    }
                    className={classNames(
                      pathname === item.href
                        ? "bg-palette-blood_red text-white"
                        : "text-white hover:bg-palette-sunset hover:text-palette-blood_red",
                      "rounded-md px-3 py-2 text-sm font-medium mt-4"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              {/* Show this if user is logged OUT */}
              <SignedOut>
                <SignInButton mode="modal" />
              </SignedOut>
              
              {/* Show this if user is logged IN */}
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>

      {/* mobile dropdown */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-1 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={
                pathname === item.href ||
                (item.href === "/profile" && pathname.startsWith("/profile"))
                  ? "page"
                  : undefined
              }
              className={classNames(
                pathname === item.href
                  ? "bg-palette-blood_red-400 text-white"
                  : "text-gray-300 hover:bg-palette-sunset-500 hover:text-palette-blood_red",
                "block px-4 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
