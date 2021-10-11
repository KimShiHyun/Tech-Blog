const Sequelize = require("sequelize");
require("dotenv").config();

// let JAWSDB_URL= "mysql://ti3m9lsy9ghgw82u:d0m5vdl2srlirr4t@kfgk8u2ogtoylkq9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nfglo4izdllfyt4v";

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
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

module.exports = sequelize;
