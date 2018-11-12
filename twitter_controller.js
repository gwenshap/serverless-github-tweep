'use strict';
 
var Twitter = require('twitter');
var config = require('./config');
 
var T = new Twitter(config);

module.exports = class TweeterPost {

    posts(params, callback) {
	T.post('statuses/update', {status: params}, function(error, tweet, response){
  	    if(error){
    		console.log(error);
  	    }
  	    console.log(tweet);  // Tweet body.
  	    console.log(response);  // Raw response object.
    	});

    	const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Tweets Posted',
                data: params // eslint-disable-line
            })
    	};
    
	callback(null, response);
    }
}
