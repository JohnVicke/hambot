import type {InferSelectModel} from "drizzle-orm";

import type * as schema from "./schema";

export type DbUser = InferSelectModel<typeof schema.users>;
