const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "Kevin",
    email: "test@test.com",
    password: "test1234",
  },
  {
    id: 2,
    username: "Justin",
    email: "justin@justice.com",
    password: "testtest1",
  },
  {
    id: 3,
    username: "Alex",
    email: "alex@lopez.com",
    password: "testest2",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
