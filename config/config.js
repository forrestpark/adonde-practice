// require('dotenv').config();
const env = process.env;

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
  "use_env_variable": env.DATABASE_URI,
  "username": env.PRODUCTION_USERNAME,
  "password": env.PRODUCTION_PASSWORD,
  "database": env.PRODUCTION_DATABASE,
  "host": env.PRODUCTION_PORT,
  "dialect": "postgres"
}

module.exports = {development, test, production}
