import HTMLParser from 'fast-html-parser';
import { parse } from 'querystring';

export default class Parser {
  constructor(event, skipInitialParse) {
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
      this.message = `${this.lines.slice(0, -4).join('\n')}\n`;
      resolve();
    });
  }

  parseReply() {
    return new Promise((resolve) => {
      const footer = this.lines.slice(this.lines.length - 4, this.lines.length).join('\n');

      const match = footer.match(
        /Reply to this email directly or view it on GitHub:\r\n(https:\/\/github.com\/.*)/
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

      this.message = messageWithBacktickedCode;
      resolve();
    });
  }

  parseImages() {
    return new Promise((resolve) => {
      let parsedForImages = this.message;

      // Match inline images
      const inlineRegexp = new RegExp(/!\[([^\]]*)\]\(([^\)]*)\)/);
      let match = inlineRegexp.exec(parsedForImages);

      while (match) {
        parsedForImages = parsedForImages.replace(match[0], match[2]);
        match = inlineRegexp.exec(parsedForImages);
      }

      this.message = parsedForImages;
      resolve();
    });
  }

  parseLinks() {
    return new Promise((resolve) => {
      let parsedForLinks = this.message;

      // Match links to images
      const linkRegexp = new RegExp(/^[^!]\[([^\]]*)\]\(([^\)]*)\)/);
      let match = linkRegexp.exec(parsedForLinks);

      while (match) {
        parsedForLinks = parsedForLinks.replace(match[0], `<${match[2]}|${match[1]}>`);
        match = linkRegexp.exec(parsedForLinks);
      }

      this.message = parsedForLinks;
      resolve();
    });
  }

  parseAvatar() {
    return new Promise((resolve) => {
      this.avatar = this.username;
      resolve();
    });
  }

}
