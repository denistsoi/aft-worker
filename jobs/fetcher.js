const request = require('request');
const debug = require('debug')('worker');

const url = 'https://data.sfgov.org/resource/wwmu-gmzc.json';

const fetcher = function() {
  return new Promise((resolve, reject)=> {
    request(url, (err, body, response)=>{
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  })
};

exports = module.exports = fetcher;