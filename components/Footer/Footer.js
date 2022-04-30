import React from "react";
import Links from "../Links/Links";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-8 py-12">
      <div className="flex flex-row gap-12">
        <Links />
      </div>
    </footer>
  );
}
