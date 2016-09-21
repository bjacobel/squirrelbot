jest.unmock('../src/index');
jest.unmock('fast-html-parser');
import {
  handler,
  parseLinks,
  parseImages,
} from '../src/index';

jest.unmock('../fixtures');
import {
  newPullRequest,
  oldStyleComment,
  newStyleComment,
  newStyleCodeReview,
  withImage,
} from '../fixtures';

import { post } from '../src/slack';

const expectNotError = (err, msg) => {
  expect(err).toBeUndefined();
  expect(msg).toBeDefined();
};

const anyBut = (overrides) => {
  return Object.assign(
    {
      subject: jasmine.any(String),
      message: jasmine.any(String),
      username: jasmine.any(String),
      link: jasmine.any(String),
    },
    overrides
  );
};

describe('the main handler', () => {
  [newPullRequest, oldStyleComment, newStyleComment].forEach((fixture) => {
    const { raw, name, subject, message, username, link } = fixture;

    describe(`using ${name} fixture`, () => {
      beforeEach(() => {
        post.mockImplementation(() => {
          return new Promise((resolve) => resolve('it worked'));
        });
        handler({ message: raw }, null, expectNotError);
      });

      it('calls Slack post code with parsed subject', () => {
        expect(post).lastCalledWith(anyBut({ subject }));
      });

      it('calls Slack post code with parsed message', () => {
        expect(post).lastCalledWith(anyBut({ message }));
      });

      it('calls Slack post code with parsed username', () => {
        expect(post).lastCalledWith(anyBut({ username }));
      });

      it('calls Slack post code with parsed link', () => {
        expect(post).lastCalledWith(anyBut({ link }));
      });

      it('calls callback with success message when done', () => {
        return handler({ message: raw }, null, (response) => {
          expect(response.data).toEqual(raw);
          expect(response.message).toMatch('it worked');
        });
      });
    });
  });

  describe('Using the new-style code reviews', () => {
    it('parses code blocks', () => {
      post.mockImplementation(() => {
        return new Promise((resolve) => resolve('it worked'));
      });

      handler(newStyleCodeReview, null, expectNotError, true);
      expect(post).lastCalledWith({
        subject: 'test',
        username: 'Brian Jacobel',
        link: 'https://github.com/bjacobel/gifs/pull/17#pullrequestreview-459735',
        message: newStyleCodeReview.parsed,
      });
    });
  });

  describe('posts with images', () => {
    beforeEach(() => {
      post.mockImplementation(() => {
        return new Promise((resolve) => resolve('it worked'));
      });
    });

    it('handles embedded images', () => {
      handler(withImage, null, expectNotError, true);
      expect(post).lastCalledWith(anyBut({ message: withImage.parsed }));
    });

    it('handles links to images', () => {
      handler(withImage, null, expectNotError, true);
      expect(post).lastCalledWith(anyBut({ message: withImage.parsed }));
    });
  });

  describe('parseLinks and parseEmbeds', () => {
    const mdLink = 'a [link](https://link.com)';
    const mdEmbed = 'an ![embedded](https://image.com)';
    const slackLink = 'a <https://link.com|link>';
    const slackEmbed = 'an https://image.com';
    const parse = (input) => parseLinks(parseImages(input));

    it("parses a single link out into Slack's link format", () => {
      expect(parse(mdLink)).toEqual(slackLink);
    });

    it("parses a single image embed out into Slack's image embed format", () => {
      expect(parse(mdEmbed)).toEqual(slackEmbed);
    });

    it('parses two links into... two links', () => {
      expect(parse(`${mdLink} - ${mdLink}`)).toEqual(`${slackLink} - ${slackLink}`);
    });

    it('parses two image embeds', () => {
      expect(parse(`${mdEmbed} - ${mdEmbed}`)).toEqual(`${slackEmbed} - ${slackEmbed}`);
    });

    it('parses a link, then an embed', () => {
      expect(parse(`${mdLink} - ${mdEmbed}`)).toEqual(`${slackLink} - ${slackEmbed}`);
    });

    it('parses an embed then a link', () => {
      expect(parse(`${mdEmbed} - ${mdLink}`)).toEqual(`${slackEmbed} - ${slackLink}`);
    });
  });
});
