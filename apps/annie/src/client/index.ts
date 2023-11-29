import {
  Client,
  Collection,
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
  context: Context;
}

export function hambotClient(options: HambotOptions) {
  const { context } = options;
  const rest = new REST({ version: "10" }).setToken(options.token);
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  const slashCommands = new Collection<HamCommandName, HamCommand>();

  for (const command of Object.values(commands)) {
    slashCommands.set(command.name, command);
  }

  client.on(Events.ClientReady, () => {
    context.logger.info(`Logged in as ${client.user?.tag}!`);
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const incomingCommand = interaction.commandName as HamCommandName;
    const command = slashCommands.get(incomingCommand);

    if (!command) {
      return;
    }

    try {
      const now = performance.now();
      await command.execute({ interaction, ...options.context });
      await context.db.insert(schema.botApiCommand).values({
        command: command.name,
      });
      const elapsed = performance.now() - now;
      options.context.logger.info(
        `Executed command: ${command.name} in ${elapsed} ms`,
      );
    } catch (error) {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  });

  return {
    refreshCommands: async () => {
      for (const command of slashCommands.values()) {
        context.logger.info(
          `refreshing: ${command.name} - ${command.description}`,
        );
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
