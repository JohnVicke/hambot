import type { db } from "@ham/db";

import { hambotClient } from "../client";
import { createContext } from "../client/context";
import { hambotHttpServer } from "../http";
import type { Logger } from "../logger";

interface HambotOptions {
  discordToken: string;
  discordClientId: string;
  db: typeof db;
  logger: Logger;
}

export function hambotApp(options: HambotOptions) {
  const ctx = createContext({ db: options.db, logger: options.logger });

  const client = hambotClient({
    ctx,
    token: options.discordToken,
    clientId: options.discordClientId,
  });

  const server = hambotHttpServer({ ctx });

  return {
    start: () => {
      client.start();
      server.start();
    },
    get bot() {
      return client;
    },
  };
}
