'use strict';

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

console.log("process.env[config.use_env_variable]: ", process.env[config.use_env_variable]);
console.log("config.use_env_variable: ", config.use_env_variable)
console.log("process.env.DATABASE_URL: ", process.env.DATABASE_URL)
console.log("config: ", config);

let sequelize;
if (config.use_env_variable) {
  console.log("there exists use_env_variable")
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        // Ref.: https://github.com/brianc/node-postgres/issues/2009
        rejectUnauthorized: false,
      },      
    },
  });
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// let sequelize;
// sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   config
// );

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
