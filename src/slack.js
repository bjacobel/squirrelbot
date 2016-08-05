import request from 'request';
import Vinz from 'vinz';

export const post = (subject, message, username, link) => {  // eslint-disable-line import/prefer-default-export
  const vinz = new Vinz('us-east-1');

  return vinz.get('slackWebhookId').then((slackWebhookId) => {
    return request(
      {
        baseUrl: 'https://hooks.slack.com/',
        uri: `services/${slackWebhookId}`,
        method: 'POST',
        json: true,
        body: {
          text: `*${subject}*\n${message}`,
          mrkdwn: true,
          username,
          attachments: [
            {
              color: '#3081B7',
              text: `<${link}|View on GitHub>`,
            },
          ],
        },
      },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          throw new Error(`got ${response.statusCode}: ${body}`);
        }
      }
    );
  });
};
