import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

import { Context } from "../client";

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
    register: () => slashCommand.command.toJSON(),
  };

  return slashCommand;
}
