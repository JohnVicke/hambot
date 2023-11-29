import { hambotApp } from "./app";
import { env } from "./env";

const app = hambotApp({
  discordToken: env.DISCORD_TOKEN,
  discordClientId: env.DISCORD_CLIENT_ID,
});

try {
  await app.bot.refreshCommands();
  console.log("Successfully registered commands");
} catch (e) {
  console.error(e);
  process.exit(1);
}

try {
  app.start();
} catch (e) {
  console.error(e);
}
