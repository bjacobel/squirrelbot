jest.unmock('../src/index');
jest.unmock('fast-html-parser');
import { handler } from '../src/index';

jest.unmock('../fixtures');
import fixtures from '../fixtures';
import newStyleCodeReview from '../fixtures/new-style-code-review';

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
  fixtures.forEach((fixture) => {
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

  fdescribe('Using the new-style code reviews', () => {
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
});
