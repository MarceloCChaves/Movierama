const Sequelize = require("sequelize");
const sequelize = new Sequelize("movies", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;