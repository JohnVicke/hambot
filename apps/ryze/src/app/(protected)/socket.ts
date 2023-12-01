import { createWsClient } from "@ham/ws/client";

export const io = createWsClient({ url: "ws://localhost:8080" });
