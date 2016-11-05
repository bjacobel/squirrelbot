import request from 'request';

jest.unmock('../src/slack');
import { post } from '../src/slack';

describe('slack integration code', () => {
  it('implements promise interface: then', () => {
    return post({}).then((msg) => {
      expect(msg).toBeDefined();
    });
  });

  it('implements promise interface: catch', () => {
    request.mockImplementationOnce((params, callback) => {
      callback('no go', { statusCode: 500 });
    });

    return post({}).catch((err) => {
      expect(err).toBeDefined();
    });
  });

  it('calls request with properly structured body', () => {
    return post({
      subject: 'subject',
      message: 'message',
      userFullName: 'username',
      replyLink: 'link',
      avatar: 'https://avat.ar',
    }).then(() => {
      expect(request).lastCalledWith(
        jasmine.objectContaining({
          body: jasmine.objectContaining({
            text: '*subject*\nmessage',
            username: 'username',
            icon_url: 'https://avat.ar',
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
      userFullName: 'username',
      replyLink: 'link',
    }).then((msg) => {
      expect(msg).toEqual(`posted message at ${new Date()}`);
    });
  });

  it('rejects the promise for an outright error', () => {
    request.mockImplementationOnce((params, callback) => {
      callback('no go', { statusCode: 404 }, 'body');
    });

    return post({}).catch((err) => {
      expect(err instanceof Error).toBeTruthy();
      expect(err.message).toEqual('got 404: body');
    });
  });

  it('rejects the promise for a non-200 code', () => {
    request.mockImplementationOnce((params, callback) => {
      callback(null, { statusCode: 301 }, 'no go');
    });

    return post({}).catch((err) => {
      expect(err instanceof Error).toBeTruthy();
      expect(err.message).toEqual('got 301: no go');
    });
  });
});
