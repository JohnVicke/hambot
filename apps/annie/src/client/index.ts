import {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  REST,
  Routes,
} from "discord.js";

import { db } from "@ham/db";

import * as commands from "../commands";
import { createContext } from "./context";

type HamCommand = (typeof commands)[keyof typeof commands];
type HamCommandName = HamCommand["name"];

interface HambotOptions {
  token: string;
  clientId: string;
}

export function hambot(options: HambotOptions) {
  const rest = new REST({ version: "10" }).setToken(options.token);
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  const slashCommands = new Collection<HamCommandName, HamCommand>();

  const ctx = createContext({ db });

  for (const command of Object.values(commands)) {
    slashCommands.set(command.name, command);
  }

  client.on(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user?.tag}!`);
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const incomingCommand = interaction.commandName as HamCommandName;
    const command = slashCommands.get(incomingCommand);

    if (!command) {
      return;
    }

    try {
      await command.execute({ interaction, ...ctx });
    } catch (error) {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  });

  return {
    refreshCommands: async () => {
      console.info("\n--- Refreshing commands --- ");
      for (const command of slashCommands.values()) {
        console.info(`${command.name} - ${command.description}`);
      }
      console.log("----------------------------\n");
      return rest.put(Routes.applicationCommands(options.clientId), {
        body: slashCommands.map((command) => command.register()),
      });
    },
    start: () => {
      void client.login(options.token);
    },
  };
}
