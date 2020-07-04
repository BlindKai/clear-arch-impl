import { getDBConfig } from "./configs";
import { createPool } from "mysql2/promise";

const dbConfig = getDBConfig(process.env.DB_TYPE || "default");
const pool = createPool(dbConfig);

export { pool };
