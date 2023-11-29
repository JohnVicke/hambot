import type { db } from "@ham/db";

import { Logger } from "../logger";

type HamDb = typeof db;

interface CreateContextOptions {
  db: HamDb;
  logger: Logger;
}

export function createContext({ db, logger }: CreateContextOptions) {
  return {
    db,
    logger,
  };
}

export type Context = ReturnType<typeof createContext>;
