This app tweets status updates from github.

It uses Serverless Framework. To run:

* Deploy: `serverless deploy -v`
* Update: `serverless deploy function -f githubposts`
* Manually invoke: `serverless invoke -f githubposts -l`
* Destroy: `serverless destroy`
