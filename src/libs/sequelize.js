const { Sequelize } = require("sequelize");
const config = require("../config/config.js");
const setupModels = require("./../database/models");

const sequelize = new Sequelize(
  process.env.DB_NAME || "products",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
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
