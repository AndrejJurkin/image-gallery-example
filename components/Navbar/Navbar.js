import React from "react";
import { SearchIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Links from "../Links/Links";
import useScrollPosition from "@react-hook/window-scroll";

export default function Navbar() {
  const scrollY = useScrollPosition(30);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-10 bg-white px-4 shadow-md",
        "transition-all duration-200 ease-in-out",
        {
          "-translate-y-full shadow-none": scrollY < 300,
        }
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center">
        <div className="hidden items-center gap-12 md:flex">
          <Links />
          <SearchIcon className="h-6 w-6" />
          <ShoppingBagIcon className="h-6 w-6" />
        </div>
      </div>
    </nav>
  );
}
