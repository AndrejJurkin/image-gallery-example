import React from "react";
import {
  SearchIcon,
  ShoppingBagIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import clsx from "clsx";
import Links from "../Links/Links";

export default function Navbar() {
  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-10 bg-white px-4 shadow-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <Link href="#" passHref>
          <div
            className={clsx(
              "flex flex-row items-center gap-2",
              "cursor-pointer text-xl font-bold text-gray-900"
            )}
          >
            <ViewGridIcon className="h-6 w-6" /> Gridfolio
          </div>
        </Link>
        <div className="hidden items-center gap-12 md:flex">
          <Links />
          <SearchIcon className="h-6 w-6" />
          <ShoppingBagIcon className="h-6 w-6" />
        </div>
      </div>
    </nav>
  );
}
