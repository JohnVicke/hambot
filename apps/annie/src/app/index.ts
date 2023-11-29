import http from "http";

import { db } from "@ham/db";

import { hambotClient } from "../client";
import { Context, createContext } from "../client/context";
import { createLogger } from "../logger";

interface HambotServerOptions {
  context: Context;
}

export function hambotServer({context}: HambotServerOptions) {
  const server = http.createServer((req, res) => {
    if (req.url === "/healthcheck") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end("Im alive");
    }
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("ok");
  });

  const PORT = parseInt(process.env.PORT ?? "8080", 10);

  return {
    start: () => {
      server.listen(PORT).on("listening", () => {
        context.logger.info(`Server listening on port ${PORT}`);
      });
    },
  };
}

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
  const server = hambotServer({ context });

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
