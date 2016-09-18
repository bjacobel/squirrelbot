import { parse } from 'querystring';
import HTMLParser from 'fast-html-parser';

import { post } from './slack';

export const handler = (event, context, callback, skipParse) => {  // eslint-disable-line import/prefer-default-export
  try {
    let jsonEvent;
    if (skipParse) {
      jsonEvent = event;
    } else {
      jsonEvent = parse(event.message);
    }

    const message = jsonEvent['body-plain'];
    const messageHTML = jsonEvent['body-html'];

    const lines = message.split('\n');
    let userMessage = `${lines.slice(0, -4).join('\n')}\n`;
    const footer = lines.slice(lines.length - 4, lines.length).join('\n');

    const replyLink = footer.match(
      /Reply to this email directly or view it on GitHub:\r\n(https:\/\/github.com\/.*)/
    )[1];

    const root = HTMLParser.parse(messageHTML, { pre: true });
    const codeBlocks = root.querySelectorAll('pre');
    codeBlocks.forEach((codeBlock) => {
      if (codeBlock.text.startsWith('<code>')) {
        // Skip these, user-supplied code blocks will already be backticked in the message plaintext
        return;
      } else {
        userMessage = userMessage.replace(codeBlock.text, `\`\`\`\r\n${codeBlock.text}\`\`\`\r\n`);
      }
    });

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
