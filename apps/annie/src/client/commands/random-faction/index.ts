import type { ButtonInteraction, CacheType } from "discord.js";
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ComponentType,
  EmbedBuilder,
} from "discord.js";

import { and, eq, schema, sql } from "@ham/db";

import { createSlashCommand } from "../create-slash-command";
import { getRandomFaction } from "./get-random-faction";
import { lossEmbed } from "./loss-embed";
import type { Faction } from "./types";
import { winEmbed } from "./win-embed";

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

function buttonRow() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("win")
      .setLabel("Win")
      .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId("loss")
      .setLabel("Loss")
      .setStyle(ButtonStyle.Danger),
    new ButtonBuilder()
      .setCustomId("re-roll")
      .setLabel("Re-Roll")
      .setStyle(ButtonStyle.Secondary),
  );
}

export const randomFactionCommand = createSlashCommand({
  name: "random-faction",
  description: "Get a random globe-trotter faction!",
  execute: async ({ interaction, db }) => {
    const faction = getRandomFaction();
    const response = await interaction.followUp({
      content: "",
      embeds: [getFactionEmbed(faction)],
      components: [buttonRow()],
    });

    try {
      const collector = response.createMessageComponentCollector({
        componentType: ComponentType.Button,
      });

      const getDbFaction = async () => {
        const dbFaction = await db.query.factions.findFirst({
          where: (factions, { eq }) => eq(factions.name, faction.name),
        });
        if (dbFaction) {
          return dbFaction;
        }
        const newDbFaction = await db
          .insert(schema.factions)
          .values({
            name: faction.name,
          })
          .returning();

        return newDbFaction[0];
      };
      collector.on("collect", async (i) => {
        const isAuthor = i.user.id === interaction.user.id;
        switch (i.customId) {
          case "win": {
            if (!isAuthor) {
              await authorOnlyResponse(i);
              break;
            }

            const dbFaction = await getDbFaction();

            if (!dbFaction) {
              await i.update({
                content: "Something went wrong!",
                components: [],
              });
              break;
            }

            await db.insert(schema.games).values({
              win: true,
              factionId: dbFaction.id,
            });

            const wins = await db
              .select({ count: sql<number>`count(*)` })
              .from(schema.games)
              .where(() =>
                and(
                  eq(schema.games.win, true),
                  eq(schema.games.factionId, dbFaction.id),
                ),
              )
              .groupBy(schema.games.factionId);

            if (!wins[0]) {
              await i.update({
                content: "Something went wrong!",
                components: [],
              });
              break;
            }

            await i.update({
              embeds: [winEmbed(faction.name, wins[0].count)],
              components: [],
            });
            break;
          }
          case "loss": {
            if (!isAuthor) {
              await authorOnlyResponse(i);
              break;
            }
            const dbFaction = await getDbFaction();

            if (!dbFaction) {
              await i.update({
                content: "Something went wrong!",
                components: [],
              });
              break;
            }

            await db.insert(schema.games).values({
              win: false,
              factionId: dbFaction.id,
            });

            const losses = await db
              .select({ count: sql<number>`count(*)` })
              .from(schema.games)
              .where(() =>
                and(
                  eq(schema.games.win, false),
                  eq(schema.games.factionId, dbFaction.id),
                ),
              )
              .groupBy(schema.games.factionId);

            if (!losses[0]) {
              await i.update({
                content: "Something went wrong!",
                components: [],
              });
              break;
            }
            await i.update({
              embeds: [lossEmbed(faction.name)],
              components: [],
            });
            break;
          }
        }
      });
    } catch (e) {
      await interaction.editReply({ content: "You took too long to respond!" });
    }
  },
});

async function authorOnlyResponse(interaction: ButtonInteraction<CacheType>) {
  await interaction.reply({
    content: "Only the original author can interact with this button!",
    ephemeral: true,
  });
}
