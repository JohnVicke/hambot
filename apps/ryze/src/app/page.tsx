import NextImage from "next/image";

import { Button } from "~/components/ui/button";
import { ThemeToggle } from "./(protected)/_components/navbar/theme-toggle";

export default function HomePage() {
  return (
    <>
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
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </header>
      <main className="mx-auto flex h-full min-h-[calc(100vh-8rem)] w-screen flex-col items-center justify-center gap-8 dark:prose-invert">
        <h1 className="bg-gradient-to-r from-sky-300 to-indigo-400 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-6xl">
          @ham-bot
        </h1>
        <p className="text-center text-2xl opacity-80">
          Admin dashboard for @ham chats custom Discord bot and its commands.
        </p>
        <Button size="lg" variant="secondary">
          Continue with Discord
        </Button>
      </main>
    </>
  );
}
