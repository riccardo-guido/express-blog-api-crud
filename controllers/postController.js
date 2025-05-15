const { posts } = require("../data/db");

const index = (req, res) => {
    res.json({
        data: posts,
        status: 200
    });  
}

const show = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(currentPost => currentPost.id === postId);
 
  res.json({
    description: "Lista del dettaglio del post " + postId,
    data: post,
  });
};

const store = (req, res) => {
  const { title, content, image, tags } = req.body;

  let maxId = 0;
  for(const post of posts) {
    if(post.id > maxId) maxId = post.id;
  }

  const postId = maxId + 1;
  const newPost = { id: postId, title, content, image, tags };

  posts.push(newPost);

  res.status(201).json(newPost);

  console.log(newPost);
  
};

const update = (req, res) => {
  //CONTROLLO SE IL POST DA MODIFICARE ESISTE
  const postId = parseInt(req.params.id);
  const post = posts.find(currentPost => currentPost.id === postId);

  if(!post) {
    res.status(404);

    res.json({
        error: '404 Not Found',
        message: 'Post not found'
    });

    return;
  }

  //CONTROLLO CHE LA RICHIESTA NON SIA MALFORMATA

const { title, content, image, tags } = req.body;

const malformedElements = [];

if (!title || typeof title !== "string" || title.length < 3) {
malformedElements.push("title");
}

if (!content || typeof content !== "string" || content.length < 3) {
malformedElements.push("content");
}

if (typeof image !== "string") { malformedElements.push("image");
}

if (!Array.isArray (tags)) { malformedElements.push("tags"); }

if (malformedElements.length) { 
  res.status(400);
res.json({ 
  error: "400 Bad Request", 
  message: "Request is malformed", 
  malformedElements, 
});

return;
}

// EFFETTUO LA SOSTITUZIONE

const updatedPost = { id: postId , title, content, image, tags }

const postIndex = posts.indexOf(post);
posts.splice(postIndex, 1, updatedPost);
res.json(updatedPost);


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

