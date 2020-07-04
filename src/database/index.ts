import { MySQLDatabase } from "./gateways/MySQLDatabase";
import { getDBConfig } from "./configs";

const dbConfig = getDBConfig(process.env.DB_TYPE || "default");
const mySQLDatabase = new MySQLDatabase(dbConfig);

export { mySQLDatabase };
