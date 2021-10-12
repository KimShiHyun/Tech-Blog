const sequelize = require("../config/connection");

const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: false });
  await seedUsers();
  await seedPosts();
  await seedComments();

  process.exit(0);
};

seedAll();