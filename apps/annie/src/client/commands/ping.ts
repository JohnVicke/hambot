import { createSlashCommand } from "./create-slash-command";

export const pingCommand = createSlashCommand({
  name: "ping",
  description: "Ping command!",
  execute: async ({ interaction }) => {
    await interaction.reply("Pong!");
  },
});
