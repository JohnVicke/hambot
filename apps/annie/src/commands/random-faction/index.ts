import { EmbedBuilder } from "discord.js";

import { createSlashCommand } from "../create-slash-command";
import { getRandomFaction } from "./get-random-faction";
import type { Faction } from "./types";

function getFactionEmbed(faction: Faction) {
  return new EmbedBuilder()
    .setColor(0x0099ff)
    .setTitle(faction.name)
    .setFields({
      name: "Challenge",
      value: faction.challenge,
    })
    .setDescription(
      faction.champions.map((champion) => `- \`${champion}\``).join("\n"),
    )
    .setImage(faction.imgUrl);
}

export const randomFactionCommand = createSlashCommand({
  name: "random-faction",
  description: "Get a random globe-trotter faction!",
  execute: async ({ interaction }) => {
    const faction = getRandomFaction();
    console.log(faction);
    await interaction.reply({ embeds: [getFactionEmbed(faction)] });
  },
});
