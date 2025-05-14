const appPort = 3000;
const appUrl = `http://localhost:${appPort}`;

const posts = [
  {
    title: "post 1",
    content: "dolce 1",
    img: "./images/1.jpeg",
    tags: ["dolci", "frutta", "zucccheri"],
  },
  {
    title: "post 2",
    content: "dolce 2",
    img: "./images/2.jpeg",
    tags: ["dolci", "frutta", "zucccheri"],
  },
  {
    title: "post 3",
    content: "dolce 3",
    img: "./images/3.jpeg",
    tags: ["dolci", "frutta", "zucccheri"],
  },
  {
    title: "post 4",
    content: "dolce 4",
    img: "./images/4.jpeg",
    tags: ["dolci", "frutta", "zucccheri"],
  },
  {
    title: "post 5",
    content: "dolce 5",
    img: "./images/5.jpeg",
    tags: ["dolci", "frutta", "zucccheri"],
  },
];

module.exports = {
  appPort,
  appUrl,
  posts,
};
