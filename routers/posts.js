const express = require("express");
const { posts } = require("../data/db");
const router = express.Router();

//# INDEX
router.get("/", (req, res) => {
  res.json({
    description: "Lista dei post",
    data: posts,
  });
});
//# SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(currentPost => currentPost.id === id);
  
  res.json({
    description: "Lista del dettaglio del post " + id,
    data: post,
  });
});
//# STORE
router.post("/", (req, res) => {
  res.json("Creazione di un nuovo post");
});
//# UPDATE
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Sostituzione del post " + id);
});
//# MODIFY
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Modifica del post " + id);
});
//# DESTROY
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Eliminazione del post " + id);
});

module.exports = router;
