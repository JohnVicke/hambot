"use client";

import React from "react";

import { createWsClient } from "@ham/ws/client";

import { api } from "~/trpc/react";
import { io } from "./socket";

type WsClient = ReturnType<typeof createWsClient>;

type RealtimeContextValue = {
  io: WsClient;
  connected: boolean;
};

const RealtimeContext = React.createContext<RealtimeContextValue | null>(null);

export function RealtimeProvider(props: React.PropsWithChildren) {
  const [connected, setConnected] = React.useState(io.connected);
  const { apiStats } = api.useUtils();

  React.useEffect(() => {
    const onConnect = () => {
      setConnected(true);
    };

    const onDisconnect = () => {
      setConnected(false);
    };

    io.connect();

    io.on("connect", onConnect);
    io.on("disconnect", onDisconnect);

    io.on("executedCommand", async () => {
      await apiStats.overview.invalidate();
    });

    return () => {
      setConnected(false);
      io.off("connect");
      io.off("executedCommand");
      io?.close();
    };
  }, []);

  return (
    <RealtimeContext.Provider value={{ io, connected }}>
      {props.children}
    </RealtimeContext.Provider>
  );
}

export function useRealtime() {
  const context = React.useContext(RealtimeContext);

  if (context === null) {
    throw new Error("useRealtime must be used within a RealtimeProvider");
  }

  return context;
}
