import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema";

console.log({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_TOKEN!,
});

export const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_TOKEN!,
});

export const db = drizzle(client, {
  schema,
});

export * from "drizzle-orm";
export { schema };
export * from "./types";
