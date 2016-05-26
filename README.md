# Contentful webhooks to AWS API Gateway to AWS Lambda to Slack

This is an example on how to deploy a webhook transformer on AWS API Gateway and Lambda to post from Contentful to Slack. This is not a fully fledged
application but rather a couple of snippets on how the lambda function might look like and how the api is defined.

### What is Contentful
[Contentful][1] is a content management platform for web applications, mobile apps and connected devices. It allows you to create, edit & manage content in the cloud and publish it anywhere via powerful API. Contentful offers tools for managing editorial teams and enabling cooperation between organizations.

## Setup
1. You need an account at AWS and the aws cli setup with your credentials




##Local Deployment

- Clone or fork this repository
- run `npm install` to install dependencies
- run `npm run setup` to create `dist` folder
- run `npm run test` to locally execute your function
- run `npm run bundle` package lambda function and node_modules in a zip
- run `npm run deploy` to upload the lambda function to AWS using the aws-cli



###Links


There are other implementations of the product catalogue demo available for iOS and Android 

[Product Catalogue for iOS][3]
[Product Catalogue for Andorid][4]

###License


Copyright (c) 2015 Contentful GmbH. Code released under the MIT license. See [LICENSE][2] for further details.
 
###Disclaimer / Maintenance

This is a project created for demo purposes and not officially supported. Report problems via the issues page but please don't expect a quick and prompt response.

 [1]: https://www.contentful.com
 [2]: LICENSE
 [3]: https://github.com/contentful/product-catalogue-ios
 [4]: https://github.com/contentful/product-catalogue-android
 [5]: https://www.contentful.com/blog/2015/01/30/introducing-space-templates/
 [6]: https://app.contentful.com
 [7]: https://contentful-labs.github.com/product-catalogue-web.ts