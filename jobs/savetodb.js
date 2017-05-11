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
  
  var saveAllMovies = movies.map((data)=> {
    
    new Promise((resolve, reject) => {
    
      Movie.findOne({ title: data.title }, (err, movie)=> {
        if (!err) {
          if(!movie) {
            var newMovie = new Movie({
              title: data.title,
              release_year: data.release_year,
              director: data.director
            });

            newMovie.save((err,result) => {
              if (err) {
                reject(err);
              }
              resolve(result);
            });
          }
          resolve();
        }
      });
    
    });
  }); 

  Promise.all(saveAllMovies);
};  

exports = module.exports = savetodb;