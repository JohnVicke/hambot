import NextImage from "next/image";

import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <div className="prose mx-auto flex h-full min-h-screen w-screen flex-col items-center justify-center dark:prose-invert">
      <h1>@hambot</h1>
      <p>hello world</p>
      <NextImage
        className="rounded-full"
        priority
        src="/assets/hambot.jpeg"
        alt="hambot"
        width="300"
        height="300"
      />
      <Button>Sign in </Button>
    </div>
  );
}
