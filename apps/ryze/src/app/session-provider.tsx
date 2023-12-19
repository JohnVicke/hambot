"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

export function NextAuthSessionProvider(props: React.PropsWithChildren) {
  return <SessionProvider>{props.children}</SessionProvider>;
}
