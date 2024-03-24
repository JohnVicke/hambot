import { EmbedBuilder } from "discord.js";

interface LossEmbedOptions {
  name: string;
  losses: number;
  wins: number;
}

export function lossEmbed({ name, losses, wins }: LossEmbedOptions) {
  return new EmbedBuilder()
    .setTitle(name)
    .setImage("https://media.tenor.com/XTzuIpRCSSsAAAAd/take-the-l.gif")
    .setFields([
      {
        name: "L's",
        value: losses.toString(),
      },
      {
        name: "Total",
        value: (losses + wins).toString(),
      },
      {
        name: "Win percentage",
        value: (wins / losses + wins).toString(),
      },
    ]);
}
