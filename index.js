require('dotenv').load();

var express  = require('express');
var mongoose = require('mongoose');
var debug    = require('debug')('worker');
var port     = process.env.PORT || 3000;

var fetcher   = require(__dirname + '/jobs/fetcher');
var savetodb  = require(__dirname + '/jobs/savetodb');

var Movie    = require(__dirname + '/models/movies');
var Location    = require(__dirname + '/models/locations');

mongoose.connect(process.env.MONGODB_URL);
var db = mongoose.connection;

// need to add this to avoid error logs
mongoose.Promise = Promise;

db.on('error', console.log.bind(console, 'connection err:'));

// check collections and then fetch/save to db
db.once('open', ()=> {
    debug('connected to db');

    // find if movies have been inserted into the db
    mongoose.connection.db.listCollections({ name: 'movies' })
      .next((err, collection)=> {
        if (err) throw new Error('collection error: ', err);

        if (!collection) {
          debug('lets do some work');

          // go and fetch and save to db
          fetcher().then(body => {
            savetodb(body);
          }).catch(err => {
            debug('err', err);
          });
        } else {
          Movie.count({}, (err, count)=> {
            debug('count', count);
          });
        }
      });

    // find if locations have been inserted into the db
    mongoose.connection.db.listCollections({ name: 'movielocations' })
      .next((err, collection)=> {
        Location.count({}, (err, count)=>{
          debug('count', count);
        });
      });

    debug('server is listening to port ', port);
    app.listen(port);
});

/**
 * init app
 */
var app = express();

/**
 * routes
 */

app.get('/', (req, res) => {
  res.send('aft-worker api service');
});

app.get('/movies/:title/?location', (req,res)=> {
  debug('/movies/location', req.params.title, req.query)

  // add query params here to give geojson
});

app.get('/movies/:title', (req, res)=>{
  debug('/movies', req.params.title, req.query)
  
  var title = req.params.title;

  var MovieQuery = { 
    title: {
      $regex: new RegExp(title.toLowerCase(), 'i') 
    }
  }

  // need to only show one per result, i.e. unique

  Movie.find(MovieQuery, (err, movie)=>{
    res.json(movie);
  });
});