import request from 'request';

export const handler = (event, context, callback) => {  // eslint-disable-line import/prefer-default-export
  request(
    {
      baseUrl: 'https://hooks.slack.com/',
      uri: 'services/T1VM11A1M/B1VP2LEAV/TcEidZbrQT0qca6ddiJVjM9i',
      method: 'POST',
      json: true,
      body: {
        text: JSON.stringify(event)
      }
    },
    (error, response, body) => {
      if (error) {
        callback(JSON.stringify(error));
      } else if (response.statusCode !== 200) {
        callback({
          code: response.statusCode,
          body
        });
      } else {
        callback(null, { success: true });
      }
    }
  );
};

// {
//   text: 'I am a test message to <http://slack.com|Slack>',
//   attachments: [
//     {
//       text: "And here's an attachment!",
//       mrkdwn_in: [
//         'text'
//       ]
//     }
//   ]
// }
