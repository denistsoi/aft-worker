require('dotenv').load();

var express  = require('express');
var mongoose = require('mongoose');
var debug    = require('debug')('worker');
var port     = process.env.PORT || 3000;

var fetcher   = require(__dirname + '/jobs/fetcher');
var savetodb  = require(__dirname + '/jobs/savetodb');

mongoose.connect(process.env.MONGODB_URL);
var db = mongoose.connection;

db
  .on('error', console.log.bind(console, 'connection err:'))
  .once('open', ()=> {
    debug('connected to db');

    mongoose.connection.db.listCollections({ name: 'movies' })
      .next((err, collection)=> {
        if (err) throw new Error('collection error: ', err);

        if (!collection) {
          debug('lets do some work');

          fetcher().then(body => {
            savetodb(body.body);
          }).catch(err => {
            debug('err', err);
          });
        } else {
          require('./models/movies').count({}, (err, count)=> {
            debug('count', count);
          });
        }
      });
    
    debug('server is listening to port ', port);
    app.listen(port);
});

var app = express();

app.get('/', (req, res) => {
  debug('/', req)
  res.send('hi');
});

app.get('/api', (req, res)=>{
  debug('/api', req)
  res.send('hello world');
});