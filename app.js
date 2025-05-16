//imports
const express = require("express");
const postsRouter = require("./routers/posts");
const { appPort, appUrl } = require("./data/db");

const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");


// express app config
const app = express();

//static assets middleware
app.use(express.static("public"));

// body parsers middlewares
app.use(express.json());

//routes
app.use("/posts", postsRouter);

// middlewares

app.use(notFound);
app.use(errorHandler);


// web server listening
app.listen(appPort, () => {
  console.log(`Il server è in ascolto sulla porta  ${appUrl}`);
});
