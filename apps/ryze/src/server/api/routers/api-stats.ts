import { TRPCError } from "@trpc/server";

import { eq, gt, schema, sql } from "@ham/db";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const apiStatsRouter = createTRPCRouter({
  overview: protectedProcedure.query(async ({ ctx }) => {
    try {
      const overview = ctx.db
        .select({
          command: schema.botApiCommand.command,
          count: sql<number>`count(${schema.botApiCommand.command})`,
        })
        .from(schema.botApiCommand)
        .groupBy(schema.botApiCommand.command)
        .having(({ count }) => gt(count, 0));
      return overview;
    } catch (error) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }),
  winLoss: protectedProcedure.query(async ({ ctx }) => {
    try {
      const winLoss = await ctx.db
        .select({
          name: schema.factions.name,
          wins: sql<number>`cast(count(case when ${schema.games.win} = true then 1 else null end) as int)`,
          games: sql<number>`cast(count(${schema.games.id}) as int)`,
        })
        .from(schema.games)
        .innerJoin(
          schema.factions,
          eq(schema.games.factionId, schema.factions.id),
        )
        .groupBy(schema.factions.name);
      return winLoss;
    } catch (error) {
      console.log({ error });
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }),
});
