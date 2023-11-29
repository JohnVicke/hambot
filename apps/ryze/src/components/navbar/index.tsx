import NextImage from "next/image";

import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="flex justify-between border border-b border-b-border px-8 py-2">
      <div className="flex items-center space-x-4">
        <NextImage
          className="rounded-full"
          priority
          src="/assets/hambot.jpeg"
          alt="hambot"
          width="40"
          height="40"
        />
        <p className="font-bold">@ham/ryze</p>
      </div>
      <ThemeToggle />
    </header>
  );
}
