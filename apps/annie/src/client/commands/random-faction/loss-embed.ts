import { EmbedBuilder } from "discord.js";

export function lossEmbed(factionName: string) {
  return new EmbedBuilder()
    .setTitle(factionName)
    .setImage("https://media.tenor.com/XTzuIpRCSSsAAAAd/take-the-l.gif");
}
