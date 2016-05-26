/**
 * Lambda function to be triggered by a Contentful webhook if changes are applied to
 * an Entry through Contentful's management API.
 *
 * Event flow:
 *
 * 1. Parse the incoming data and headers from Contentful
 * 2. Use Contentful's management API to resolve a user id to a user name
 * 3. Format a message compatible with Slack's incoming webhooks
 * 4. Post to Slack
 * @param event AWS event data.
 * @param context AWS Lambda uses this parameter to provide your handler the runtime
 *        information of the Lambda function that is executing.
 * @param callback Optional callback to return information to the caller.
 */
exports.handler = function (event, context, callback) {

  const body = event.body;
  const id = body.sys.id;
  const spaceId = body.sys.space.sys.id;
  const type = body.sys.type;

  // We only want to post to slack if an entry is changed.
  if (type != 'Entry') {
    callback(null, "I am only posting entries to slack!");
    return;
  }

  const slackURL = 'UrlOfYourIncomingWebhookAtSlack';
  const cmaURL = `https://api.contentful.com/spaces/${spaceId}/`;
  const cmaToken = 'ManagementTokenWithAccessToTheSpace';

  const typeUrlMap = {
    "Entry": "entries",
    "Asset": "assets",
    "ContentType": "content_types"
  };

  const contentfulDeeplinkURL = `https://app.contentful.com/spaces/${spaceId}/${typeUrlMap[type]}/${id}`;

  var slackMessageTemplate = {
    "channel": "#contenthooks",
    "username": `Webhook: ${event.name}`,
    "icon_emoji": ":contentful:",
    "attachments": [{
      "fallback": "",
      "pretext": "",
      "color": "#000000",
      "fields": [
        {
          "title": "Action applied to Entry",
          "value": event.topic,
          "short": false
        }
      ]
    }]
  };

  // Load the axios http lib.
  var axios = require('axios');

  /*
   * 1. get the userId
   * 2. getTheName of the user
   * 3. post final message to slack
   */
  getUserId().then(function (userId) {
    return getUserName(userId);
  }).then(function (userName) {
    return postToSlack(userName);
  }).then(function () {
    callback(null, 'Webhook adaptor complete!');
  }).catch(function (error) {
    console.log('error', error);
    callback(error);
  });


  function getUserId() {

    return axios({
      url: cmaURL + typeUrlMap[type] + '/' + id,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + cmaToken
      }
    }).then(response => {
      return response.data.sys.updatedBy.sys.id;
    }).catch(error => {
      throw error;
    });
  }

  function getUserName(userId) {
    return axios({
      url: cmaURL + 'users/',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + cmaToken
      }
    }).then(response => {
      var users = response.data.items.filter(user => {
        return user.sys.id == userId;
      });
      var userName = users[0].firstName + ' ' + users[0].lastName;
      console.log('getUserName', userName);
      return userName;
    }).catch(function (error) {
      throw error;
    })
  }

  function postToSlack(userName) {
    console.log('postToSlack');

    var message = `An Entry has just been changed by ${userName}. The full Entry is below in the fields. Here is the link to the entry: <${contentfulDeeplinkURL}|Link to ${body.sys.type}>`;

    // Append all fields to post.
    for (var key in body.fields) {
      slackMessageTemplate.attachments[0].fields.push({
        "title": "field." + key,
        "value": body.fields[key]['en-US'],
        short: false
      });
    }

    slackMessageTemplate.attachments[0].fallback = message;
    slackMessageTemplate.attachments[0].pretext = message;
    console.log(JSON.stringify(slackMessageTemplate));
    return axios({
      url: slackURL,
      method: 'POST',
      data: JSON.stringify(slackMessageTemplate)
    });
  }
};