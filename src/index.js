import request from 'request';
import { parse } from 'querystring';

export const handler = (event, context, callback) => {  // eslint-disable-line import/prefer-default-export
  const jsonEvent = parse(event.message);

  try {
    const message = jsonEvent['body-plain'];
    const userMessage = message.split('---').slice(0, -1).join('---');
    const githubLink = message.match(/https:\/\/github.com\/.*$/)[0];

    request(
      {
        baseUrl: 'https://hooks.slack.com/',
        uri: 'services/T1VM11A1M/B1VP2LEAV/TcEidZbrQT0qca6ddiJVjM9i',
        method: 'POST',
        json: true,
        body: {
          text: `*${jsonEvent.subject}*`,
          mrkdwn: true,
          username: jsonEvent.from.split('<')[0].trim(),
          attachments: [
            {
              text: userMessage,
              mrkdwn_in: [
                'text'
              ]
            },
            {
              text: `<${githubLink}|View on GitHub>`
            }
          ]
        }
      },
      (error, response, body) => {
        if (error) {
          callback(JSON.stringify(error));
        } else if (response.statusCode !== 200) {
          callback(JSON.stringify({
            code: response.statusCode,
            body
          }));
        } else {
          callback(null, { success: true });
        }
      }
    );
  } catch (err) {
    callback(JSON.stringify({ err, event }));
  }
};
