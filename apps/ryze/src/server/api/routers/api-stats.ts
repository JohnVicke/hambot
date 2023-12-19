import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { eq, gt, schema, sql } from "@ham/db";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const apiStatsRouter = createTRPCRouter({
  overview: protectedProcedure.query(async ({ ctx }) => {
    try {
      const overview = ctx.db
        .select({
          command: schema.botApiCommand.command,
          count: sql<number>`count(${schema.botApiCommand.command})`,
          id: schema.botApiCommand.id,
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

      return winLoss.map((wl) => {
        const losses = wl.games - wl.wins;
        const winPercentage = Math.round((wl.wins / (wl.wins + losses)) * 100);
        const lossPercentage = Math.round((losses / (wl.wins + losses)) * 100);
        return {
          name: wl.name,
          wins: wl.wins,
          games: wl.games,
          losses,
          winPercentage,
          lossPercentage,
        };
      });
    } catch (error) {
      console.log({ error });
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }),
  removeCommand: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const removeCommand = await ctx.db
          .delete(schema.botApiCommand)
          .where(eq(schema.botApiCommand.id, input.id));

        return removeCommand.rowsAffected;
      } catch (error) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
    }),
});
