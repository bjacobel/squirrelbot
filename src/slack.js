import request from 'request';
import Vinz from 'vinz';

export const post = (params) => {  // eslint-disable-line import/prefer-default-export
  const { subject, message, userFullName, replyLink, avatar } = params;
  const vinz = new Vinz('us-east-1');

  return vinz.get('slackWebhookId').then((slackWebhookId) => {
    return new Promise((resolve, reject) => {
      request(
        {
          baseUrl: 'https://hooks.slack.com/',
          uri: `services/${slackWebhookId}`,
          method: 'POST',
          json: true,
          body: {
            text: `*${subject}*\n${message}`,
            mrkdwn: true,
            username: userFullName,
            icon_url: avatar,
            attachments: [
              {
                color: '#3081B7',
                text: `<${replyLink}|View on GitHub>`,
              },
            ],
          },
        },
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            reject(new Error(`got ${response.statusCode}: ${body}`));
          } else {
            resolve(`posted message at ${new Date()}`);
          }
        },
      );
    });
  });
};
