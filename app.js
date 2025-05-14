//imports
const postsRouter = require("./routers/posts");
const { appPort, appUrl } = require("./data/db");
const express = require("express");

// express app config
const app = express();

//static assets middleware
app.use(express.static("public"));

//routers
app.use("/posts", postsRouter);

// web server listening
app.listen(appPort, () => {
  console.log(`Il server è in ascolto sulla porta  ${appUrl}`);
});
