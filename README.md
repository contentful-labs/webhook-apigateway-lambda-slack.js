# Contentful webhooks to AWS API Gateway to AWS Lambda to Slack

This is an example on how to deploy a webhook transformer on AWS API Gateway and Lambda to post from Contentful to Slack. This is not a fully fledged application but rather a couple of snippets on how the lambda function might look like and how the api and integration on [AWS API Gateway](https://aws.amazon.com/api-gateway/) is defined.

### What is Contentful
[Contentful][1] is a content management platform for web applications, mobile apps and connected devices. It allows you to create, edit & manage content in the cloud and publish it anywhere via powerful API. Contentful offers tools for managing editorial teams and enabling cooperation between organizations.

### Content
- [src/lambda.js](src/lambda.js): The lambda function to transform the payload
- [aws-api-lambda-slack/swagger.json](aws-api-lambda-slack/swagger.json): Swagger definition of the API
- [aws-api-lambda-slack/integration.json](aws-api-lambda-slack/integration.json): Integration config used in AWS API Gateway

## Requirement
- You need an account at AWS and the [AWS CLI](https://aws.amazon.com/cli/) setup with your AWS credentials
- node and npm installed

## Usage
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
