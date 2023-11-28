import type { db } from "@ham/db";

type HamDb = typeof db;

export function createContext({ db }: { db: HamDb }) {
  return {
    db,
  };
}

export type Context = ReturnType<typeof createContext>;
