import { EmbedBuilder } from "discord.js";

export function winEmbed(factionName: string, wins: number) {
  return new EmbedBuilder()
    .setTitle(factionName)
    .setImage(
      "https://media.tenor.com/cuwj6gJLLW8AAAAd/victory-royale-winner.gif",
    )
    .setFields([
      {
        name: "Wins",
        value: wins.toString(),
      },
      {
        name: "Losses",
        value: "0",
      },
    ]);
}
