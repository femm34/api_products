const { Sequelize } = require("sequelize");
const { config } = require("../config/database/config");
const setupModels = require("./../database/models");

console.log(config.dbName);
console.log(config.dbUser);
console.log(config.dbPassword);
console.log(config.dbHost);
console.log(config.dbPort);

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    dialect: "mysql",
    host: config.dbHost,
    port: config.dbPort,
  }
);

sequelize
  .sync()
  .then(function () {
    console.log("DB connection sucessful.");
  })
  .catch((err) => console.log("error has occured"));
setupModels(sequelize);

module.exports = sequelize;
