const { post } = require("./slack");
const Parser = require("./parser");

const handler = (event, context, callback) => {
  const parser = new Parser(event);

  return parser
    .parseAll()
    .then((parsedData) => {
      return post(parsedData);
    })
    .then((msg) => {
      callback(null, {
        message: msg,
        event,
      });
    })
    .catch((err) => {
      callback(
        JSON.stringify(
          {
            error: `${err.name}: ${err.message}`,
            event,
          },
          null,
          2,
        ),
      );
    });
};

module.exports = {
  handler,
};
