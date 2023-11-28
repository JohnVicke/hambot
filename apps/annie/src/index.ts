import { hambot } from "./client";
import { env } from "./env";

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
