'use strict';

const TweeterPost = require('./twitter_controller');
var tp = new TweeterPost();

module.exports.githubposts = (event, context, callback) => {
	
	const response = {
    		statusCode: 200,
    		body: JSON.stringify({
      			message: tp.posts("test post 10:21pm", callback)
 
    		}),
  	};
  
	callback(null, response);
 
};
