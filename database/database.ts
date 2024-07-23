import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { DB } from "../prisma/types";

// dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
  }),
});

export const db = new Kysely<DB>({
  dialect,
});

