const { post } = require("./slack");
const JiraParser = require("./JiraParser");
const GitHubParser = require("./GitHubParser");

const handler = (event, context, callback) => {
  let parser;

  if (
    event.context &&
    event.context["resource-path"] &&
    event.context["resource-path"] === "/jira"
  ) {
    parser = new JiraParser(event);
  } else {
    parser = new GitHubParser(event);
  }

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
