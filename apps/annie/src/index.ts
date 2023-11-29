import http from "http";

import { hambot } from "./client";
import { env } from "./env";

// https://fly.io/docs/reference/configuration/#the-checks-section
const server = http.createServer((req, res) => {
  if (req.url === "/healthcheck") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Im alive");
  }
  res.writeHead(200, { "Content-Type": "text/plain" });
  return res.end("ok");
});

const PORT = parseInt(process.env.PORT ?? "8080", 10);

server.listen(PORT).on("listening", () => {
  console.log(`Server listening on port ${PORT}`);
});

const bot = hambot({
  token: env.DISCORD_TOKEN,
  clientId: env.DISCORD_CLIENT_ID,
});

try {
  await bot.refreshCommands();
  console.log("Successfully registered commands");
} catch (e) {
  console.error(e);
  process.exit(1);
}

try {
  bot.start();
} catch (e) {
  console.error(e);
}
