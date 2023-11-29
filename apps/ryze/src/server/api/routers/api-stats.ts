import { TRPCError } from "@trpc/server";

import { gt, schema, sql } from "@ham/db";

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
});
