const { Sequelize } = require("sequelize");
const config = require("../config/config.js");
const setupModels = require("./../database/models");

const sequelize = new Sequelize("hola", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
});

sequelize
  .sync()
  .then(function () {
    console.log("DB connection sucessful.");
  })
  .catch((err) => console.log("error has occured"));
setupModels(sequelize);

module.exports = sequelize;
