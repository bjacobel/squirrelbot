import Parser from '../src/parser';
import {
  newPullRequest,
  oldStyleComment,
  newStyleComment,
  newStyleCodeReview,
  withImage,
} from '../fixtures';

jest.unmock('fast-html-parser');
jest.unmock('querystring');
jest.unmock('../fixtures');
jest.unmock('../src/parser');

describe('the parser class', () => {
  [newPullRequest, oldStyleComment, newStyleComment].forEach((fixture) => {
    const { raw, name, subject, message, userFullName, replyLink, avatar } = fixture;

    describe(`using ${name} fixture`, () => {
      let parser;

      beforeEach(() => {
        parser = new Parser({ message: raw });
      });

      it('parses subject', () => {
        return parser.parseAll().then((parsedData) => {
          expect(parsedData).toEqual(jasmine.objectContaining({ subject }));
        });
      });

      it('parses message', () => {
        return parser.parseAll().then((parsedData) => {
          expect(parsedData).toEqual(jasmine.objectContaining({ message }));
        });
      });

      it('parses username', () => {
        return parser.parseAll().then((parsedData) => {
          expect(parsedData).toEqual(jasmine.objectContaining({ userFullName }));
        });
      });

      it('parses link', () => {
        return parser.parseAll().then((parsedData) => {
          expect(parsedData).toEqual(jasmine.objectContaining({ replyLink }));
        });
      });

      it('parses avatar', () => {
        return parser.parseAll().then((parsedData) => {
          expect(parsedData).toEqual(jasmine.objectContaining({ avatar }));
        });
      });
    });
  });

  describe('Using the new-style code reviews', () => {
    it('parses multiple code blocks', () => {
      return new Parser(newStyleCodeReview, true).parseAll().then((parsedData) => {
        expect(parsedData).toEqual(jasmine.objectContaining({
          subject: 'test',
          userFullName: 'Brian Jacobel',
          replyLink: 'https://github.com/bjacobel/gifs/pull/17#pullrequestreview-459735',
          message: newStyleCodeReview.parsed,
        }));
      });
    });
  });

  describe('links and images', () => {
    const mdLink = 'a [link](https://link.com)';
    const mdEmbed = 'an ![embedded](https://image.com)';
    const slackLink = 'a <https://link.com|link>';
    const slackEmbed = 'an https://image.com';

    it('parses a fixture with images properly', () => {
      return new Parser(withImage, true).parseAll().then((parsedData) => {
        expect(parsedData).toEqual(jasmine.objectContaining({ message: withImage.parsed }));
      });
    });

    it("parses a single link out into Slack's link format", () => {
      return new Parser({ 'body-plain': mdLink }, true).parseAll().then((parsedData) => {
        expect(parsedData.message).toEqual(slackLink);
      });
    });

    it("parses a single image embed out into Slack's image embed format", () => {
      return new Parser({ 'body-plain': mdEmbed }, true).parseAll().then((parsedData) => {
        expect(parsedData.message).toEqual(slackEmbed);
      });
    });

    it('parses two links into... two links', () => {
      return new Parser({ 'body-plain': `${mdLink} - ${mdLink}` }, true).parseAll().then((parsedData) => {
        expect(parsedData.message).toEqual(`${slackLink} - ${slackLink}`);
      });
    });

    it('parses two image embeds', () => {
      return new Parser({ 'body-plain': `${mdEmbed} - ${mdEmbed}` }, true).parseAll().then((parsedData) => {
        expect(parsedData.message).toEqual(`${slackEmbed} - ${slackEmbed}`);
      });
    });

    it('parses a link, then an embed', () => {
      return new Parser({ 'body-plain': `${mdLink} - ${mdEmbed}` }, true).parseAll().then((parsedData) => {
        expect(parsedData.message).toEqual(`${slackLink} - ${slackEmbed}`);
      });
    });

    it('parses an embed then a link', () => {
      return new Parser({ 'body-plain': `${mdEmbed} - ${mdLink}` }, true).parseAll().then((parsedData) => {
        expect(parsedData.message).toEqual(`${slackEmbed} - ${slackLink}`);
      });
    });
  });
});
