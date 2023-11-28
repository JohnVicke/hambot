import * as factions from "./factions";

export function getRandomFaction() {
  const factionNames = Object.keys(factions);
  const randomIndex = Math.floor(Math.random() * factionNames.length);
  const randomFactionName = factionNames[randomIndex] as keyof typeof factions;
  return factions[randomFactionName];
}
