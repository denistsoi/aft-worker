require('dotenv').load();



var mapbox    = require('mapbox');
var client    = new mapbox(process.env.MAPBOX_API_KEY);

var async     = require('async');

var Movie     = require('../models/movies');
var Location  = require('../models/locations');

var debug   = require('debug');

var Logdb   = debug('logdb');
var Logsave = debug('logsave');

var saveLocation = function(movie, result) {
  if (movie) {
    return new Promise((resolve, reject) => {
      
      if (movie.hasOwnProperty('locations') && typeof movie.locations == 'string') {
        client.geocodeForward(movie.locations, {
          "bbox": [
            -122.517909004229,
            37.6041399900046,
            -122.354997990413,
            37.8324400092519
          ],
        }, (err, data, response)=>{ 
          // debug('worker')(err, data)
          // add missing locations to another array to analyze
          if (data.hasOwnProperty('features')) {
            if (data.features.length) { 

              var newLocation = new Location({
                movie_id: result._id,
                location: movie.locations,
                longitude: data.features[0].geometry.longitude,
                latitude:  data.features[0].geometry.latitude
              })

              newLocation.save((err, savedDocument) => {
                if (err) {
                  reject(err)
                }
                if (savedDocument) {
                  resolve(savedDocument);
                } 
              })
            }     
          }
          
        })
      }
    })    
  }

  
};

/**
 * [savetodb saves movies to mongodb url]
 * @param  {[array]} data [stringified JSON array]
 */
var savetodb = function(data) {
  var body = data.body;
  var movies = JSON.parse(body);
  Logdb('save to db');
  Logdb(movies.length);
  
  var saveAllMovies = async.map(movies, (data)=> {
    
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
              if (result) {
                saveLocation(data, result)  
              }
            });
          }
        }
      });
    });
  }); 


  // Promise.all(saveAllMovies);
};  

exports = module.exports = savetodb;