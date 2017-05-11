var Movie = require('../models/movies');
var debug = require('debug')('savetodb');

var savetodb = function(data) {
  var movies = JSON.parse(data);
  debug('save to db');
  debug(movies.length);
  
  var saveAllMovies = movies.forEach((movie)=> {
    
    new Promise((resolve, reject) => {
    
      Movie.findOne({ title: movie.title }, (err, m)=> {
        if (!err) {
          if(!m) {

            var newMovie = new Movie({
              title: movie.title,
              release_year: movie.release_year,
              director: movie.director
            });

            resolve(newMovie.save().then(doc => {
              console.log(doc);
            }).catch(err => {
              debug('err', err);
            }));
          }
        }
      });
    
    });
  }); 

  Promise.all(saveAllMovies).then(data => {
    debug(data);
  }).catch(err => {
    debug('error', err);
  });

};  

exports = module.exports = savetodb;