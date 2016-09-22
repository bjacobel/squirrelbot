import { post } from './slack';
import Parser from './parser';

export const handler = (event, context, callback) => {  // eslint-disable-line import/prefer-default-export, max-len
  const parser = new Parser(event);

  return parser.parseAll().then((parsedData) => {
    return post(parsedData);
  }).then((msg) => {
    callback(null, {
      message: msg,
      event,
    });
  }).catch((err) => {
    callback(JSON.stringify({
      error: `${err.name}: ${err.message}`,
      event,
    }, null, 2));
  });
};
