const { Sequelize } = require("sequelize");
const { config } = require("../config/database/config");
const setupModels = require("./../database/models");

console.log(config.dbName);
console.log(config.dbUser);
console.log(config.dbPassword);
console.log(config.dbHost);

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "mysql",
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
