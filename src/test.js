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
          "id": "article"
        }
      },
      "id": "iUhKLITKqk4soWeMYw6gy",
      "revision": 2,
      "createdAt": "2016-04-14T15:24:30.446Z",
      "updatedAt": "2016-06-03T08:37:07.106Z"
    },
    "fields": {
      "title": {
        "en-US": "sdadasdasdasdas dsfd"
      },
      "body": {
        "en-US": "sczd adasd asd asd asd s"
      }
    }
  },
  "name": "Mock Webhook",
  "topic": "ContentManagement.Entry.publish",
};

var mockEntryAutoSave = {
  "body": {
    "sys": {
      "id": "iUhKLITKqk4soWeMYw6gy",
      "type": "Entry",
      "createdAt": "2016-04-14T15:23:23.741Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "5NItczv8FWvPn5UTJpTOMM"
        }
      },
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "es6qo15ggymf"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "article"
        }
      },
      "firstPublishedAt": "2016-04-14T15:24:30.446Z",
      "publishedCounter": 2,
      "publishedAt": "2016-06-03T08:37:07.106Z",
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "5NItczv8FWvPn5UTJpTOMM"
        }
      },
      "publishedVersion": 27,
      "version": 28,
      "updatedAt": "2016-06-03T08:37:07.112Z",
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "5NItczv8FWvPn5UTJpTOMM"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "sdadasdasdasdas dsfd"
      },
      "body": {
        "en-US": "sczd adasd asd asd asd s"
      }
    }
  },
  "name": "Mock Webhook",
  "topic": "ContentManagement.Entry.auto_save",
};

lambda.handler(mockEntry, mockContext, function (error, msg) {
  console.log('publish', msg)
});

lambda.handler(mockEntry, mockContext, function (error, msg) {
  console.log('auto_save', msg)
});
