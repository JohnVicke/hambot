import "~/styles/globals.css";
import "~/styles/rays.css";

import { cookies } from "next/headers";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Toaster } from "~/components/ui/toaster";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "./_components/theme-provider";
import { NextAuthSessionProvider } from "./session-provider";

export const metadata = {
  title: "HAMBOT",
  description: "Hambot dashboard",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <NextAuthSessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            <TRPCReactProvider cookies={cookies().toString()}>
              <Toaster />
              <div className="jumbo absolute !max-w-full opacity-20 transition-all" />
              {children}
            </TRPCReactProvider>
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
