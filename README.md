This app tweets status updates from github.
It uses [Serverless Framework](https://serverless.com/).


# Configure
First, create a file called config.js and populate it with your AWS credentials. Something like this:
```
module.exports = {
    consumer_key: 'K6q...A',
    consumer_secret: 'gHr...f',
    access_token_key: '106...r',
    access_token_secret: '55T...w'
 }
```
# Use Serverless Framework to Run:

* Deploy: `serverless deploy -v`
* Update: `serverless deploy function -f githubposts`
* Manually invoke: `serverless invoke -f githubposts -l`
* Destroy: `serverless destroy`
