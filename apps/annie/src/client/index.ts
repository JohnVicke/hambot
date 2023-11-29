import {
  Client,
  Collection,
  DiscordjsError,
  Events,
  GatewayIntentBits,
  REST,
  Routes,
} from "discord.js";

import { schema } from "@ham/db";

import * as commands from "./commands";
import type { Context } from "./context";

type HamCommand = (typeof commands)[keyof typeof commands];
type HamCommandName = HamCommand["name"];

interface HambotOptions {
  token: string;
  clientId: string;
  ctx: Context;
}

export function hambotClient(options: HambotOptions) {
  const { ctx } = options;
  const rest = new REST({ version: "10" }).setToken(options.token);
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  const slashCommands = new Collection<HamCommandName, HamCommand>();

  for (const command of Object.values(commands)) {
    slashCommands.set(command.name, command);
  }

  client.on(Events.ClientReady, () => {
    ctx.logger.info(`Logged in as ${client.user?.tag}!`);
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const incomingCommand = interaction.commandName as HamCommandName;
    const command = slashCommands.get(incomingCommand);

    if (!command) {
      return;
    }

    try {
      await interaction.deferReply({ ephemeral: false });
      const now = performance.now();
      await ctx.db.insert(schema.botApiCommand).values({
        command: command.name,
      });
      const elapsed = performance.now() - now;
      options.ctx.logger.info(
        `Executed command: ${command.name} in ${elapsed} ms`,
      );
      await command.execute({ interaction, ...options.ctx });
    } catch (error) {
      ctx.logger.error(`Error executing command: ${command.name}`);

      if (error instanceof DiscordjsError) {
        ctx.logger.error(`DiscordjsError: ${error.message}`);
        await interaction.followUp({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      } else {
        ctx.logger.error(error);
      }
    }
  });

  return {
    refreshCommands: async () => {
      for (const command of slashCommands.values()) {
        ctx.logger.info(`refreshing: ${command.name} - ${command.description}`);
      }
      return rest.put(Routes.applicationCommands(options.clientId), {
        body: slashCommands.map((command) => command.register()),
      });
    },
    start: () => {
      void client.login(options.token);
    },
  };
}
