"use client";

import { Zap, ZapOff } from "lucide-react";

import { useRealtime } from "../../realtime-provider";

export function WsConnectionStatus() {
  const { connected } = useRealtime();

  if (!connected) {
    return <ZapOff className="h-4 w-4 text-red-200" />;
  }
  return <Zap className="h-4 w-4 text-green-200" />;
}
