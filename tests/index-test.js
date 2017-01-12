import Parser from '../src/parser';
import { handler } from '../src/index';
import { post } from '../src/slack';

jest.unmock('../src/index');

describe('main handler', () => {
  const event = { foo: 'bar' };

  beforeEach(() => {
    post.mockImplementation(() => Promise.resolve('success'));
    Parser.prototype.parseAll.mockImplementation(() => new Promise(resolve => resolve({
      subject: 'subject',
    })));
  });

  it('calls callback with error info if parsing fails', () => {
    Parser.prototype.parseAll.mockImplementationOnce(() => Promise.reject(new Error('err')));

    return handler(event, null, (err) => {
      expect(Parser.prototype.parseAll).toHaveBeenCalled();
      expect(post).not.toHaveBeenCalled();
      expect(err).toEqual(JSON.stringify({
        error: 'Error: err',
        event,
      }, null, 2));
    });
  });

  it('calls callback with error info if posting fails', () => {
    post.mockImplementationOnce(() => Promise.reject(new Error('err')));

    return handler(event, null, (err) => {
      expect(Parser.prototype.parseAll).toHaveBeenCalled();
      expect(post).toHaveBeenCalled();
      expect(err).toEqual(JSON.stringify({
        error: 'Error: err',
        event,
      }, null, 2));
    });
  });

  it('calls callback with success if parsing and posting succeed', () => {
    return handler(event, null, (err, msg) => {
      expect(Parser.prototype.parseAll).toHaveBeenCalled();
      expect(post).toHaveBeenCalled();
      expect(err).toBeNull();
      expect(msg).toEqual({
        message: 'success',
        event,
      });
    });
  });
});
