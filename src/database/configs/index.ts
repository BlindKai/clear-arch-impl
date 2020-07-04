const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;

type config = { [column: string]: object };

const config = {
  host: DB_HOST,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASS,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const testConfig = {
  database: "counters_v2_test",
  user: "test",
  password: "test",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const configs: config = {
  default: testConfig,
  test: testConfig,
  development: testConfig,
  production: config,
};

function getDBConfig(dbType: string) {
  const config = configs[dbType];

  if (typeof config === "undefined") {
    throw new Error(`Database configuration of type "${dbType}" doesn't exist`);
  }

  return config;
}

export { getDBConfig };
