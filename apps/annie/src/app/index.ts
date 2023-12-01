import type { db } from "@ham/db";
import { createWsServer } from "@ham/ws/server";

import { hambotClient } from "../client";
import { createContext } from "../client/context";
import { hambotHttpServer } from "../http";
import type { Logger } from "../logger";

interface HambotOptions {
  discordToken: string;
  discordClientId: string;
  db: typeof db;
  logger: Logger;
  httpPort: number;
}

export function hambotApp(options: HambotOptions) {
  const server = hambotHttpServer();

  const ws = createWsServer({
    server: server.instance,
    cors: {
      origin: "http://localhost:3000",
      credentials: true,
    },
  });

  ws.on("connection", (socket) => {
    options.logger.info("Client connected");
    socket.on("disconnect", () => {
      options.logger.info("Client disconnected");
    });
  });

  const ctx = createContext({ db: options.db, logger: options.logger, ws });

  const client = hambotClient({
    ctx,
    token: options.discordToken,
    clientId: options.discordClientId,
  });

  return {
    start: () => {
      client.start();
      server.start(options.httpPort, () =>
        options.logger.info(`Listening on port ${options.httpPort}`),
      );
    },
    get bot() {
      return client;
    },
  };
}
