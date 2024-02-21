"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/shop" ? "active" : ""}`}
            href="/shop"
          >
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}
