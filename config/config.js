
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
  // "use_env_variable": 'postgres://raptohzklcwxed:a8351f1190ee5bb759aa7dbfb12d351153873abc23389eaf0d6bb4d634ddb424@ec2-23-23-128-222.compute-1.amazonaws.com:5432/dch54qith12c4r',
  "use_env_variable": env.DATABASE_URL,
  "username": env.PRODUCTION_USERNAME,
  "password": env.PRODUCTION_PASSWORD,
  "database": env.PRODUCTION_DATABASE,
  "host": env.PRODUCTION_HOST,
  "dialect": "postgres"
}

module.exports = {development, test, production}
