const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const requireLogin = require('../middlewares/requireLogin');

const Movie = mongoose.model('movie');

module.exports = app => {
  // load movie list
  app.get('/api/my-list', requireLogin, (req, res) => {
    Movie.find({ _user: req.user.id }).then(movie => res.send(movie));
  });

  // delete a specific movie off list
  app.delete('/api/delete/:id', requireLogin, (req, res) => {
    let id = ObjectID(req.params.id);
    Movie.deleteOne({ _id: id }, (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send('user deleted');
    });
  });

  // saving a movie to list
  app.post('/api/add-movie', requireLogin, (req, res, next) => {
    const { title, poster, releaseDate, summary } = req.body;
    console.log(title);
    Movie.findOne({ title: title }).then(movie => {
      if (movie) {
        return res
          .status(400)
          .send({ error: `Error: "${title}" is already in your list!` });
      } else {
        const movie = new Movie({
          title,
          poster,
          releaseDate,
          summary,
          _user: req.user.id,
          date: Date.now()
        });

        try {
          movie.save();
          res.send();
        } catch (err) {
          res.status(422).send(err);
        }
      }
    });
  });
};
