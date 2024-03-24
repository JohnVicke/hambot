import { EmbedBuilder } from "discord.js";

interface WinEmbedOptions {
  name: string;
  losses: number;
  wins: number;
}

export function winEmbed(options: WinEmbedOptions) {
  return new EmbedBuilder()
    .setTitle(options.name)
    .setImage(
      "https://media.tenor.com/cuwj6gJLLW8AAAAd/victory-royale-winner.gif",
    )
    .setFields([
      {
        name: "W's",
        value: options.wins.toString(),
      },
      {
        name: "Total",
        value: (options.losses + options.wins).toString(),
      },
      {
        name: "Win percentage",
        value: (options.wins / (options.losses + options.wins)).toString(),
      },
    ]);
}
