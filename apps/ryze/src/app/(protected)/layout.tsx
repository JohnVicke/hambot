import React from "react";
import { redirect } from "next/navigation";

import { getServerAuthSession } from "~/server/auth";
import { Navbar } from "./_components/navbar";
import { RealtimeProvider } from "./realtime-provider";

export default async function DashboardLayout(props: React.PropsWithChildren) {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/");
  }

  return (
    <RealtimeProvider>
      <Navbar />
      <main className="mx-auto w-full max-w-screen-2xl px-4 pt-4">
        {props.children}
      </main>
    </RealtimeProvider>
  );
}
