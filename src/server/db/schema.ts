// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `portfolloid_${name}`);

export const inquiries = createTable(
  "inquiry",
  {
    id: serial("id").primaryKey(),
    username: varchar("name", { length: 256 }),
    email: varchar("email", { length: 256 }),
    organization: varchar("organization", { length: 256 }),
    services: varchar("services", { length: 1024 }),
    message: varchar("message", { length: 1024 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.username),
  }),
);
