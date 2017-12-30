var Twitter = require('twitter');
var firstline = require('firstline');
var child_process = require('child_process');

var secret = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

var client = new Twitter(secret);

child_process.exec("head -1 in.txt", function(error, stdout, stderr) {
  client.post('statuses/update', {status: stdout},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });
});

