import http from "http";

import type { Context } from "../client/context";

interface HambotServerOptions {
  context: Context;
}

export function hambotHttpServer({ context }: HambotServerOptions) {
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
