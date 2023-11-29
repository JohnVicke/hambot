import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { users } from "./auth";

export const inviteLinks = sqliteTable("invite_link", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  inviterId: text("inviter_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
});

export const inviteLinksRelations = relations(inviteLinks, ({ one }) => ({
  inviter: one(users, {
    fields: [inviteLinks.inviterId],
    references: [users.id],
  }),
}));
