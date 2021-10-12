const Sequelize = require("sequelize");
require("dotenv").config();

if (process.env.JAWSDB_URL) {
  connection = MYSQL.createConnection(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

connection.connect();

module.exports = sequelize;
