import http from "http";

import { hambot } from "./client";
import { env } from "./env";

const server = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("ok");
});

server.listen(8080);

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
