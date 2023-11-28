import NextImage from "next/image";

import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex h-full  min-h-screen w-screen flex-col items-center justify-center">
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
