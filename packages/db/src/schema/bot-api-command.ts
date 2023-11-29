import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { createdAt } from "../utils/timestamp";

export const botApiCommand = sqliteTable("bot_api_command", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  command: text("command", { mode: "text" }).notNull(),
  createdAt,
});
