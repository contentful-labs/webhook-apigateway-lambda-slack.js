var lambda = require('./lambda.js');

var mockContext = {
  'identity': 'foo',
  'succeed': function (event) {
    console.log(event);
  }
};

var mockEntry = {
  "body": {
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "es6qo15ggymf"
        }
      },
      "type": "Entry",
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "foo"
        }
      },
      "id": "6PsnuTp8DSCOOmi2EEuyC0",
      "revision": 39,
      "createdAt": "2016-04-07T13:29:32.675Z",
      "updatedAt": "2016-04-12T10:02:34.973Z"
    },
    "fields": {
      "title": {
        "en-US": "Hello Eugene, this now is live from CF vhjvhjhjghjhgjgjjhghj"
      },
      "body": {
        "en-US": "this is some hidden user from Contentful"
      }
    }
  },
  "name": "Super nice webhook from CF",
  "topic": "ContentManagement.Entry.publish",
};

lambda.handler(mockEntry, mockContext, function (error, msg) {
  console.log(msg)
});
