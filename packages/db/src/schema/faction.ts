import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { createdAt } from "../utils/timestamp";

export const factions = sqliteTable("faction", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
});

export const games = sqliteTable("game", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  factionId: integer("faction_id", { mode: "number" })
    .notNull()
    .references(() => factions.id, { onDelete: "cascade" }),
  win: integer("win", { mode: "boolean" }).notNull(),
  createdAt,
});

export const factionsRelations = relations(factions, ({ many }) => ({
  games: many(games),
}));

export const gamesRelations = relations(games, ({ one }) => ({
  faction: one(factions, {
    fields: [games.factionId],
    references: [factions.id],
  }),
}));
