import type { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export interface SlashCommandExecutable {
  command: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
