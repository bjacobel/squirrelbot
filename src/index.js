import { parse } from 'querystring';

import { post } from './slack';

export const handler = (event, context, callback) => {  // eslint-disable-line import/prefer-default-export
  const jsonEvent = parse(event.message);

  try {
    const message = jsonEvent['body-plain'];

    let userMessage = message.split('---').slice(0, -1).join('---');

    const githubLinks = message.match(/https:\/\/github.com\/.*/);
    const replyLink = githubLinks[githubLinks.length - 1];

    const inlineCodeLines = userMessage.match(/(>\s.*)/g);

    if (inlineCodeLines) {
      const firstLine = inlineCodeLines[0];
      const lastLine = inlineCodeLines[inlineCodeLines.length - 1];

      // wrap it in markdown backticks
      userMessage = userMessage.replace(firstLine, '```\n$&').replace(lastLine, '$&\n```');

      // remove the carets
      userMessage = userMessage.replace(/>\s(.*)/g, '$1');
    }

    post({
      subject: jsonEvent.subject,
      message: userMessage,
      username: jsonEvent.from.split('<')[0].trim(),
      link: replyLink,
    }).then((msg) => {
      callback(null, {
        message: msg,
        data: event.message,
      });
    }).catch((err) => {
      throw new Error(err);
    });
  } catch (err) {
    callback(JSON.stringify({ error: `${err.name}: ${err.message}`, event }, null, 2));
  }
};
