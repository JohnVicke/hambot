import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const pingCommand = {
  command: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  execute: async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply("Pong!");
  },
};
