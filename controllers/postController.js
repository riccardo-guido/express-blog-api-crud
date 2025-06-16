const connection = require("../data/db");

const index = (req, res) => {
  const sql = "SELECT * FROM `posts`";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);

    res.json({
      data: results,
      status: 200,
    });
  });
};

const show = (req, res) => {
  const postId = parseInt(req.params.id);
  const sql = `
    SELECT *
    FROM posts
    WHERE id = ?`;

  connection.query(sql, [postId], (err, results) => {
    if (err) return res.status(500).json({ error: "Error executing query" });
    if (results === 0) return res.status(404).json({ error: "Post not found" });

    const post = results[0];
    res.json({
      data: post,
      status: 200,
    });
  });

  //   const post = posts.find(currentPost => currentPost.id === postId);
  //   // HANDLE NOT FOUND
  // if(!post) {
  //   const error = new Error();
  //   error.statusCode = 404;
  //   error.message = "Post not found";
  //   throw error;
  // }
  // // HANDLE SUCCESS
  //   res.json({
  //     description: "Lista del dettaglio del post " + postId,
  //     data: post,
  //   });
};

const store = (req, res) => {
  //   const { title, content, image, tags } = req.body;
  //   const malformedElements = [];
  // if (!title || typeof title !== "string" || title.length < 3) {
  // malformedElements.push("title");
  // }
  // if (!content || typeof content !== "string" || content.length < 3) {
  // malformedElements.push("content");
  // }
  // if (typeof image !== "string") { malformedElements.push("image");
  // }
  // if (!Array.isArray (tags)) { malformedElements.push("tags"); }
  // if (malformedElements.length) {
  //   const error = new Error("Request is malformed");
  //   error.statusCode = 400;
  //   error.data = malformedElements;
  //   throw error;
  // }
  //   let maxId = 0;
  //   for(const post of posts) {
  //     if(post.id > maxId) maxId = post.id;
  //   }
  //   const postId = maxId + 1;
  //   const newPost = { id: postId, title, content, image, tags };
  //   posts.push(newPost);
  //   res.status(201).json(newPost);
  //   console.log(newPost);
};

const update = (req, res) => {
  //   //CONTROLLO SE IL POST DA MODIFICARE ESISTE
  //   const postId = parseInt(req.params.id);
  //   const originalPost = posts.find(currentPost => currentPost.id === postId);
  //   if(!originalPost) {
  //     const error = new Error("Post not found");
  //   error.statusCode = 404;
  //   throw error;
  //   }
  //   //CONTROLLO CHE LA RICHIESTA NON SIA MALFORMATA
  // const { title, content, image, tags } = req.body;
  // const malformedElements = [];
  // if (!title || typeof title !== "string" || title.length < 3) {
  // malformedElements.push("title");
  // }
  // if (!content || typeof content !== "string" || content.length < 3) {
  // malformedElements.push("content");
  // }
  // if (typeof image !== "string") { malformedElements.push("image");
  // }
  // if (!Array.isArray (tags)) { malformedElements.push("tags"); }
  // if (malformedElements.length) {
  //     const error = new Error("Request is malformed");
  //   error.statusCode = 400;
  //   error.data = { malformedElements};
  //   throw error;
  // }
  // // EFFETTUO LA SOSTITUZIONE
  // const updatedPost = { id: postId , title, content, image, tags }
  // const originalPostIndex = posts.indexOf(originalPost);
  // posts.splice(originalPostIndex, 1, updatedPost);
  // res.json(updatedPost);
};

const modify = (req, res) => {
  //  //CONTROLLO SE IL POST DA MODIFICARE ESISTE
  //   const postId = parseInt(req.params.id);
  //   const originalPost = posts.find(currentPost => currentPost.id === postId);
  //   if(!originalPost) {
  //    const error = new Error("Post not Found");
  //   error.statusCode = 404;
  //   throw error;
  //   }
  //   const title = req.body.title ?? originalPost.title;
  //   const content = req.body.content ?? originalPost.content;
  //   const image = req.body.image ?? originalPost.image;
  //   const tags = req.body.tags ?? originalPost.tags;
  //   const malformedElements = [];
  // if (typeof title !== "string" || title.length < 3) {
  // malformedElements.push("title");
  // }
  // if (typeof content !== "string" || content.length < 3) {
  // malformedElements.push("content");
  // }
  // if (typeof image !== "string") { malformedElements.push("image");
  // }
  // if (!Array.isArray (tags)) { malformedElements.push("tags"); }
  // if (malformedElements.length) {
  //   res.status(400);
  // res.json({
  //   error: "400 Bad Request",
  //   message: "Request is malformed",
  //   malformedElements,
  // });
  // return;
  // }
  // originalPost.title = title;
  // originalPost.content = content;
  // originalPost.image = image;
  // originalPost.tags = tags;
  //   res.json(originalPost);
};

const destroy = (req, res) => {
  const postId = parseInt(req.params.id);
  const sql = `
    DELETE FROM blogdb.posts WHERE (id = ?);`;

  connection.query(sql, [postId], (err, results) => {
    if (err) return res.status(500).json({ error: "Error executing query" });
    if (results === 0) return res.status(404).json({ error: "Post not found" });

    res.json({
      data: results,
      status: 200,
    });
  });
};

module.exports = { index, show, store, update, modify, destroy };
