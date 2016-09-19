import Vinz from 'vinz';
import request from 'request';

jest.unmock('../src/slack');
import { post } from '../src/slack';

describe('slack integration code', () => {
  it('implements promise interface; can then or catch', () => {
    post({}).then((msg) => {
      return expect(msg).toBeDefined();
    });

    request.mockImplementationOnce((params, callback) => {
      callback('no go');
    });

    post({}).catch((err) => {
      return expect(err).toBeDefined();
    });
  });

  it('calls request with properly structured body', () => {
    return post({
      subject: 'subject',
      message: 'message',
      username: 'username',
      link: 'link',
    }).then(() => {
      return expect(request).lastCalledWith(
        jasmine.objectContaining({
          body: jasmine.objectContaining({
            text: '*subject*\nmessage',
            username: 'username',
            attachments: jasmine.arrayContaining([
              jasmine.objectContaining({
                text: '<link|View on GitHub>',
              }),
            ]),
          }),
        }),
        jasmine.any(Function)
      );
    });
  });

  it('prints a success message including the date', () => {
    return post({
      subject: 'subject',
      message: 'message',
      username: 'username',
      link: 'link',
    }).then((msg) => {
      return expect(msg).toEqual(`posted message at ${new Date()}`);
    });
  });

  it('rejects the promise for an outright error', () => {
    request.mockImplementationOnce((params, callback) => {
      callback('no go', { statusCode: 404 }, 'body');
    });

    return post({}).catch((err) => {
      return expect(err).toEqual('got 404: body');
    });
  });

  it('rejects the promise for a non-200 code', () => {
    request.mockImplementationOnce((params, callback) => {
      callback(null, { statusCode: 301 }, 'no go');
    });

    return post({}).catch((err) => {
      return expect(err).toEqual('got 301: no go');
    });
  });
});
