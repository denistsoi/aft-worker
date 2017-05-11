var Movie = require('../models/movies');
var debug = require('debug')('savetodb');

/**
 * [savetodb saves movies to mongodb url]
 * @param  {[array]} data [stringified JSON array]
 */
var savetodb = function(data) {
  var body = data.body;
  var movies = JSON.parse(body);
  debug('save to db');
  debug(movies.length);
  
  var saveAllMovies = movies.map((movie)=> {
    
    new Promise((resolve, reject) => {
    
      Movie.findOne({ title: movie.title }, (err, m)=> {
        if (!err) {
          if(!m) {

            var newMovie = new Movie({
              title: movie.title,
              release_year: movie.release_year,
              director: movie.director
            });

            newMovie.save((err,result) => {
              if (err) {
                reject(err);
              }
              resolve(result);
            });
          }
        }
      });
    
    });
  }); 

  // return new Promise((resolve, reject) => {
  Promise.all(saveAllMovies);
  

};  

exports = module.exports = savetodb;