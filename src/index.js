import { parse } from 'querystring';
import HTMLParser from 'fast-html-parser';

import { post } from './slack';

const parseBody = (lines) => {
  return `${lines.slice(0, -4).join('\n')}\n`;
};

const parseReply = (lines) => {
  const footer = lines.slice(lines.length - 4, lines.length).join('\n');

  return footer.match(
    /Reply to this email directly or view it on GitHub:\r\n(https:\/\/github.com\/.*)/
  )[1];
};

const parseCode = (messageHTML, userMessage) => {
  const root = HTMLParser.parse(messageHTML, { pre: true });
  let messageWithBacktickedCode = userMessage;
  const codeBlocks = root.querySelectorAll('pre');

  codeBlocks.forEach((codeBlock) => {
    if (codeBlock.text.startsWith('<code>')) {
      // Skip these, user-supplied code blocks will already be backticked in the message plaintext
      return;
    } else {
      messageWithBacktickedCode = messageWithBacktickedCode.replace(
        codeBlock.text,
        `\`\`\`\r\n${codeBlock.text}\`\`\`\r\n`
      );
    }
  });

  return messageWithBacktickedCode;
};

const parseImages = (userMessage) => {
  let parsedForImages = userMessage;

  // Match inline images
  const inlineRegexp = new RegExp(/!\[(.*)\]\((.*)\)/g);
  let match = inlineRegexp.exec(parsedForImages);

  while (match) {
    parsedForImages = parsedForImages.replace(match[0], match[2]);
    match = inlineRegexp.exec(parsedForImages);
  }

  return parsedForImages;
};

const parseLinks = (userMessage) => {
  let parsedForLinks = userMessage;

  // Match links to images
  const linkRegexp = new RegExp(/\[(.*)\]\((.*)\)/g);
  let match = linkRegexp.exec(parsedForLinks);

  while (match) {
    parsedForLinks = parsedForLinks.replace(match[0], `<${match[2]}|${match[1]}>`);
    match = linkRegexp.exec(parsedForLinks);
  }

  return parsedForLinks;
};

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

    let userMessage = parseBody(lines);
    const replyLink = parseReply(lines);
    userMessage = parseCode(messageHTML, userMessage);
    userMessage = parseImages(userMessage);
    userMessage = parseLinks(userMessage);

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
