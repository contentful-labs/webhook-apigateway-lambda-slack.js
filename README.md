# Contentful webhooks to AWS API Gateway to AWS Lambda to Slack

This is an example on how to deploy a webhook transformer on AWS API Gateway and Lambda to post from Contentful to Slack. This is not a fully fledged application but rather a couple of snippets on how the lambda function might look like and how the api and integration on [AWS API Gateway][3] is defined.

### What is Contentful
[Contentful][1] is a content management platform for web applications, mobile apps and connected devices. It allows you to create, edit & manage content in the cloud and publish it anywhere via powerful API. Contentful offers tools for managing editorial teams and enabling cooperation between organizations.

### Content
- [src/lambda.js](src/lambda.js): The lambda function to transform the payload
- [aws-api-gateway-setup/swagger.json][6]: Swagger definition of the API
- [aws-api-gateway-setup/integration.json][5]: Integration config used in AWS API Gateway

## Requirement
- You need an account at AWS and the [AWS CLI](https://aws.amazon.com/cli/) setup with your AWS credentials
- node and npm installed
- A space at [http://contentful.com](contentful.com) with an API key for the management API with read access.
- A slack channel with an [incoming webhook](https://api.slack.com/incoming-webhooks) configured

## Wiring it all together (it's not as bad as it looks)
1. Create the webhook target API at [AWS API Gateway][3], similar to what you see in [swagger.json][6]
2. Create your [AWS Lambda function][4] and connect it to the API from 1.
3. Setup the integration for the headers, similar to what you see in [integrations.json][5]. Deploy your API.
4. Setup a [webhook](https://www.contentful.com/developers/docs/concepts/webhooks/) in your Contentful space and point it to your API from 1
5. Edit lambda.json and replace `cmaToken` with your contentful management API token and `slackURL` with the url of your incoming webhook on slack

## Usage of this repo
- Clone or fork this repository
- run `npm install` to install dependencies
- run `npm run setup` to create `dist` folder
- run `npm run test` to locally execute your function
- run `npm run bundle` package lambda function and node_modules in a zip
- run `npm run deploy` to upload the lambda function to AWS using the aws-cli

###License

Copyright (c) 2016 Contentful GmbH. Code released under the MIT license. See [LICENSE][2] for further details.
 
###Disclaimer / Maintenance

This is a project created for demo purposes and not officially supported. Report problems via the issues page but please don't expect a quick and prompt response.

 [1]: https://www.contentful.com
 [2]: LICENSE
 [3]: https://aws.amazon.com/api-gateway/
 [4]: http://docs.aws.amazon.com/lambda/latest/dg/welcome.html
 [5]: ./aws-api-gateway-setup/integration.json
 [6]: ./aws-api-gateway-setup/swagger.json
