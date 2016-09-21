import { post } from './slack';
import Parser from './parser';

export const handler = (event, context, callback, skipInitialParse = false) => {  // eslint-disable-line import/prefer-default-export, max-len
  try {
    const parser = new Parser(event, skipInitialParse);
    parser.parseAll().then((parsedData) => {
      return post(parsedData);
    }).then((msg) => {
      callback(null, {
        message: msg,
        data: event,
      });
    }).catch((err) => {
      throw new Error(err);
    });
  } catch (err) {
    callback(JSON.stringify({
      error: `${err.name}: ${err.message}`,
      event,
    }, null, 2));
  }
};
