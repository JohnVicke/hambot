import { db } from "@ham/db";

import { hambotClient } from "../client";
import { createContext } from "../client/context";
import { hambotHttpServer } from "../http";
import { createLogger } from "../logger";

interface HambotOptions {
  discordToken: string;
  discordClientId: string;
}

export function hambotApp(options: HambotOptions) {
  const context = createContext({ db, logger: createLogger() });
  const client = hambotClient({
    context,
    token: options.discordToken,
    clientId: options.discordClientId,
  });
  const server = hambotHttpServer({ context });

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
