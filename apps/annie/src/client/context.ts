import type { db } from "@ham/db";
import type { createWsServer } from "@ham/ws/server";

import type { Logger } from "../logger";

interface CreateContextOptions {
  db: typeof db;
  logger: Logger;
  ws: ReturnType<typeof createWsServer>;
}

export function createContext({ db, logger, ws }: CreateContextOptions) {
  console.log("db", db);
  return {
    db,
    ws,
    logger,
  };
}

export type Context = ReturnType<typeof createContext>;
