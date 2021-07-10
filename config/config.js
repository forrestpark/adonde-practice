const env = process.env;

console.log("env.DATABASE_URL: ", env.DATABASE_URL);
console.log("env.NODE_ENV: ", env.NODE_ENV);

const development = {
  "username": env.POSTGRES_USERNAME,
  "password": env.POSTGRES_PASSWORD,
  "database": env.POSTGRES_DATABASE,
  "host": "127.0.0.1",
  "dialect": "postgres"
}

const test = {
  "username": "root",
  "password": null,
  "database": "database_test",
  "host": "127.0.0.1",
  "dialect": "mysql"
}

const production = {
  "use_env_variable": "DATABASE_URL",
  "dialect": "postgres",
  "ssl": {
    "rejectUnautorized": false,
  },
}

module.exports = {development, test, production}
