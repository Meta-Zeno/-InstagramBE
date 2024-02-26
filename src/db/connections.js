const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate();

console.log("Connection Establi shed Successfully.");

module.exports = sequelize;
