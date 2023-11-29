import type { db } from "@ham/db";

import type { Logger } from "../logger";

interface CreateContextOptions {
  db: typeof db;
  logger: Logger;
}

export function createContext({ db, logger }: CreateContextOptions) {
  return {
    db,
    logger,
  };
}

export type Context = ReturnType<typeof createContext>;
