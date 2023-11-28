import { REST, Routes, SlashCommandBuilder } from "discord.js";

import { env } from "../env";

const commands = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with pong!");

const rest = new REST({ version: "10" }).setToken(env.DISCORD_TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(env.DISCORD_CLIENT_ID), {
    body: commands,
  });
} catch (error) {
  console.error(error);
}
