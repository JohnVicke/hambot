import { authRouter } from "~/server/api/routers/auth";
import { createTRPCRouter } from "~/server/api/trpc";
import { apiStatsRouter } from "./routers/api-stats";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  apiStats: apiStatsRouter,
});

export type AppRouter = typeof appRouter;
