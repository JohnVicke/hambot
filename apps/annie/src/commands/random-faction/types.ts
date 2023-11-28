export enum FactionType {
  BandleCity = "Bandle City",
  Bilgewater = "Bilgewater",
  Demacia = "Demacia",
  Freljord = "Freljord",
  Ionia = "Ionia",
  Ixtal = "Ixtal",
  Noxus = "Noxus",
  Piltover = "Piltover",
  ShadowIsles = "Shadow Isles",
  Shurima = "Shurima",
  Targon = "Targon",
  Void = "Void",
  Zaun = "Zaun",
}

export type Faction = {
  name: FactionType;
  imgUrl: string;
  challenge: string;
  champions: string[];
};
