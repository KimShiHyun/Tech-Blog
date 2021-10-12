const sequelize = require("../config/connection");

const seedUsers = require("./user-seed");
const seedPosts = require("./post-seed");
const seedComments = require("./comment-seed");

const seedAll = async () => {
  await sequelize.sync({ force: false });
  await seedUsers();
  await seedPosts();
  await seedComments();

  process.exit(0);
};

seedAll();
