import { eq, schema, sql } from "@ham/db";
import type { db as HamDb } from "@ham/db";

export function getFactionStats(db: typeof HamDb, factionId: number) {
  return db
    .select({
      wins: sql<number>`sum(CASE WHEN win THEN 1 ELSE 0 END)`,
      losses: sql<number>`sum(CASE WHEN NOT win THEN 1 ELSE 0 END)`,
    })
    .from(schema.games)
    .where(() => eq(schema.games.factionId, factionId))
    .groupBy(schema.games.factionId);
}
