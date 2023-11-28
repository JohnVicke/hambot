import React from "react";
import { redirect } from "next/navigation";

import { Navbar } from "~/components/navbar";
import { getServerAuthSession } from "~/server/auth";

export default async function DashboardLayout(props: React.PropsWithChildren) {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
