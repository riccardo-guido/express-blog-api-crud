const posts = require("../data/db");

const index = (req, res) => {
    res.json({
        data: posts.posts,
        status: 200
    });  
}

const show = (req, res) => {
     const id = req.params.id;
  
  res.json({
    description: "Lista del dettaglio del post " + id,
    data: posts.posts,
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
  const id = req.params.id;
  res.json("Eliminazione del post " + id);
};



module.exports = { index, show, store, update, modify, destroy }

