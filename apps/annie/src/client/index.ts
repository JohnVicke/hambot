import {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  REST,
  Routes,
} from "discord.js";

import { db } from "@ham/db";

import { pingCommand } from "../commands/ping";

interface HambotOptions {
  token: string;
  clientId: string;
}

export function hambot(options: HambotOptions) {
  const rest = new REST({ version: "10" }).setToken(options.token);
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  const commands = new Collection();

  commands.set("ping", pingCommand.command);

  const context = {
    db,
  } as const;

  client.on(Events.ClientReady, () => {
    console.log(`Logged in as ${client.user?.tag}!`);
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ping") {
      const users = await db.query.users.findMany();
      console.log(users);
      await interaction.reply("Pong!");
    }
  });

  return {
    refreshCommands: async () => {
      return rest.put(Routes.applicationCommands(options.clientId), {
        body: commands,
      });
    },
    start: () => {
      client.login(options.token);
    },
  };
}
