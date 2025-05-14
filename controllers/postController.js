const { posts } = require("../data/db");

const index = (req, res) => {
    res.json({
        data: posts,
        status: 200
    });  
}

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(currentPost => currentPost.id === id);
 
  res.json({
    description: "Lista del dettaglio del post " + id,
    data: post,
  });
};

const store = (req, res) => {
  res.json("Creazione di un nuovo post");
};

const update = (req, res) => {
  const id = req.params.id;
  res.json("Sostituzione del post " + id);
};

const modify = (req, res) => {
  const id = req.params.id;
  res.json("Modifica del post " + id);
};

const destroy = (req, res) => {
    const id = parseInt(req.params.id);
  const post = posts.find(currentPost => currentPost.id === id);

  if(!post) {
    res.status(404);

    res.json({
        error: '404 Not Found',
        message: 'Post not found'
    });

    return;
  }

  const postIndex = posts.indexOf(post);
  posts.splice(postIndex, 1);

  console.log(posts);
  
  res.sendStatus(204);

};



module.exports = { index, show, store, update, modify, destroy }

