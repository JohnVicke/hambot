import { TRPCError } from "@trpc/server";

import { schema } from "@ham/db";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  inviteLink: protectedProcedure.mutation(async ({ ctx }) => {
    const { user } = ctx.session;
    const uuid = crypto.randomUUID();
    const now = new Date();
    const oneHour = 60 * 60 * 1000;
    const expiresAt = new Date(now.getTime() + oneHour);

    const inviteLink = await ctx.db.insert(schema.inviteLinks).values({
      inviterId: user.id,
      expiresAt,
    });

    if (!inviteLink) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }

    return uuid;
  }),
  users: protectedProcedure.query(async ({ ctx }) => {
    try {
      const users = await ctx.db.query.users.findMany();
      return users;
    } catch (error) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
  }),
});
