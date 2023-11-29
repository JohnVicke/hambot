import type { ChatInputCommandInteraction } from "discord.js";
import { SlashCommandBuilder } from "discord.js";

import type { Context } from "../context";

interface SlashCommandOptions<TName extends string> {
  name: TName;
  description: string;
  command?: SlashCommandBuilder;
  execute: (
    ctx: { interaction: ChatInputCommandInteraction } & Context,
  ) => Promise<void>;
}

export function createSlashCommand<const TName extends string>(
  options: SlashCommandOptions<TName>,
) {
  const slashCommand = {
    command:
      options.command ??
      new SlashCommandBuilder()
        .setName(options.name)
        .setDescription(options.description),
    execute: options.execute,
    get name() {
      return options.name;
    },
    get description() {
      return options.description;
    },
    register: () => slashCommand.command.toJSON(),
  };

  return slashCommand;
}
