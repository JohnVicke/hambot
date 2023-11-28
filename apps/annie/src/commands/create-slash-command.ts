import {
  ChatInputCommandInteraction,
  Collection,
  SlashCommandBuilder,
} from "discord.js";

interface SlashCommandOptions {
  name: string;
  description: string;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}

export function createSlashCommand(options: SlashCommandOptions) {
  const slashCommand = {
    command: new SlashCommandBuilder()
      .setName(options.name)
      .setDescription(options.description),
    execute: options.execute,
    register: (collection: Collection<unknown, unknown>) => {
      collection.set(options.name, slashCommand.command);
    },
  };

  return slashCommand;
}
