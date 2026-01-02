
"use client";

import { NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      <NavbarItem isActive={pathname === "/"}>
        <Link
          href="/"
          className={`text-white transition-opacity text-lg ${
            pathname === "/" ? "font-semibold opacity-100 underline text-palette-alloy_orange-700" : "opacity-80 hover:opacity-100"
          }`}
        >
          2026
        </Link>
      </NavbarItem>

      <NavbarItem isActive={pathname === "/2025"}>
        <Link
          href="/2025"
          className={`text-white transition-opacity text-lg ${
            pathname === "/2025" ? "font-semibold opacity-100 underline text-palette-alloy_orange-700" : "opacity-80 hover:opacity-100"
          }`}
        >
          2025
        </Link>
      </NavbarItem>
    </>
  );
}