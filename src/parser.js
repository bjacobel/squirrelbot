import HTMLParser from 'fast-html-parser';
import { parse } from 'querystring';
import request from 'request';

export default class Parser {
  constructor(event, skipInitialParse = false) {
    // if skipInitialParse is true, event is the json we want. Else use the querystring parser
    if (skipInitialParse) {
      this.event = event;
    } else {
      this.event = parse(event.message);
    }

    this.message = this.event['body-plain'];
    this.html = this.event['body-html'];
    this.subject = this.event.subject;
    this.username = this.event['X-Github-Sender'];
    this.lines = this.message.split('\n');
    this.userFullName = this.event.from ? this.event.from.split('<')[0].trim() : 'GitHub';
  }

  parseAll() {
    return Promise.all([
      this.parseBody(),
      this.parseReply(),
      this.parseCode(),
      this.parseDetails(),
      this.parseImages(),
      this.parseLinks(),
      this.parseAvatar(),
    ]).then(() => {
      return {
        subject: this.subject,
        message: this.message,
        avatar: this.avatar,
        replyLink: this.replyLink,
        userFullName: this.userFullName,
      };
    });
  }

  parseBody() {
    return new Promise((resolve) => {
      if (this.lines.length > 4) {
        this.message = `${this.lines.slice(0, -4).join('\n')}\n`;
      }
      resolve();
    });
  }

  parseReply() {
    return new Promise((resolve) => {
      const footer = this.lines.slice(this.lines.length - 4, this.lines.length).join('\n');

      const match = footer.match(
        /Reply to this email directly or view it on GitHub:\r\n(https:\/\/github.com\/.*)/,
      );

      if (match && match.length >= 2) {
        this.replyLink = match[1];
      } else {
        this.replyLink = 'https://github.com';
      }
      resolve();
    });
  }

  parseCode() {
    return new Promise((resolve) => {
      const root = HTMLParser.parse(this.html, { pre: true });
      let messageWithBacktickedCode = this.message;
      const codeBlocks = root.querySelectorAll('pre');

      codeBlocks.forEach((codeBlock) => {
        let { text } = codeBlock;

        if (text.startsWith('<code>')) {
          // Skip these, user-supplied code blocks will already be backticked in the message plaintext
          return;
        }

        if (text.startsWith('> ')) {
          text = text.slice(2, text.length);
        }

        messageWithBacktickedCode = messageWithBacktickedCode.replace(
          codeBlock.text,
          `\`\`\`\r\n${text}\`\`\`\r\n`,
        );
      });

      this.message = messageWithBacktickedCode;
      resolve();
    });
  }

  parseImages() {
    return new Promise((resolve) => {
      // Match inline (embedded) images
      const inlineRegexp = new RegExp(/!\[([^\]]*)\]\(([^\)]*)\)/);  // eslint-disable-line no-useless-escape
      let match = inlineRegexp.exec(this.message);

      while (match) {
        this.message = this.message.replace(match[0], match[2]);
        match = inlineRegexp.exec(this.message);
      }

      // match drag-n-dropped images (img tags)
      const imgRegexp = new RegExp(/<img.*src="(.*)">/);
      match = imgRegexp.exec(this.message);

      while (match) {
        this.message = this.message.replace(match[0], match[1]);
        match = imgRegexp.exec(this.message);
      }

      resolve();
    });
  }

  parseLinks() {
    return new Promise((resolve) => {
      const linkRegexp = new RegExp(/[^!]\[([^\]]*)\]\(([^\)]*)\)/);  // eslint-disable-line no-useless-escape
      let match = linkRegexp.exec(this.message);

      while (match) {
        // substr1 gets the extra space captured by the negative exclamation in the regex
        this.message = this.message.replace(match[0].substr(1), `<${match[2]}|${match[1]}>`);
        match = linkRegexp.exec(this.message);
      }

      resolve();
    });
  }

  parseAvatar() {
    return new Promise((resolve, reject) => {
      request(
        {
          baseUrl: 'https://api.github.com/users/',
          uri: this.username,
          method: 'GET',
          json: true,
          headers: {
            'User-Agent': 'squirrelbot',
          },
        },
        (error, response, body) => {
          if (error || response.statusCode !== 200) {
            reject(new Error(`got ${response.statusCode}: ${body}`));
          } else {
            this.avatar = body.avatar_url;
            resolve();
          }
        },
      );
    });
  }

  parseDetails() {
    return new Promise((resolve) => {
      this.message = this.message.replace(/<details>[\n\S\s]*<\/details>/, "");
      resolve();
    });
  }
}
