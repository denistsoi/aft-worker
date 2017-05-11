require('dotenv').load();

var express  = require('express');
var mongoose = require('mongoose');
var debug    = require('debug')('worker');
var port     = process.env.PORT || 3000;

var fetcher   = require(__dirname + '/jobs/fetcher');
var savetodb  = require(__dirname + '/jobs/savetodb');

var Movie    = require(__dirname + '/models/movies');

mongoose.connect(process.env.MONGODB_URL);
var db = mongoose.connection;

// need to add this to avoid error logs
mongoose.Promise = Promise;

db.on('error', console.log.bind(console, 'connection err:'));

// check collections and then fetch/save to db
db.once('open', ()=> {
    debug('connected to db');

    mongoose.connection.db.listCollections({ name: 'movies' })
      .next((err, collection)=> {
        if (err) throw new Error('collection error: ', err);

        if (!collection) {
          debug('lets do some work');

          fetcher().then(body => {
            // debug(body);
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

app.get('/api/:title', (req, res)=>{
  debug('/api', req.params.title, req.query)
  
  var title = req.params.title;

  var MovieQuery = { 
    title: {
      $regex: new RegExp('^' + title.toLowerCase(), 'i') 
    }
  }

  Movie.find(MovieQuery, (err, movie)=>{
    res.json(movie);
  });
});