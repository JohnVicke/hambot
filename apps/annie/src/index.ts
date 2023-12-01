import { db } from "@ham/db";

import { hambotApp } from "./app";
import { env } from "./env";
import { createLogger } from "./logger";

const logger = createLogger();

const app = hambotApp({
  httpPort: env.PORT,
  discordToken: env.DISCORD_TOKEN,
  discordClientId: env.DISCORD_CLIENT_ID,
  logger,
  db,
});

try {
  await app.bot.refreshCommands();
} catch (e) {
  console.error(e);
  process.exit(1);
}

try {
  app.start();
} catch (e) {
  console.error(e);
}
