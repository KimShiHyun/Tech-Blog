const { Post } = require("../models");

const postData = [
  {
    title: "Magic Leap raises $500M at a $2B valuation",
    content:
      "Magic Leap has had one hell of a journey, and to their credit, it seems investors are still addicted to giving them money.",
    user_id: 1,
  },
  {
    title: "Korean robo-advisor advances its AI-based platform",
    content:
      "Fount, a robo-advisor startup in South Korea, has raised a $33.4M Series C round.",
    user_id: 2,
  },
  {
    title: "Relativity Space hits a key milestone",
    content:
      "Relativity Space said Friday it had completed Stage 1 testing of the Terran 1 rocket.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
