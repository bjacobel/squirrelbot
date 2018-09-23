const Parser = require("./Parser");
const { URLSearchParams } = require("url");

module.exports = class GitHubParser extends Parser {
  constructor(event) {
    super(event);
    this.event = event.message
      ? new URLSearchParams(event.message)
      : new URLSearchParams(event);

    this.message = this.event.get("body-plain");
    this.html = this.event.get("body-html");
    this.subject = this.event.get("subject");
    this.username = this.event.get("X-Github-Sender");
    this.lines = this.message ? this.message.split("\n") : [];
    /* eslint-disable indent */
    this.userFullName = this.event.has("from")
      ? this.event
          .get("from")
          .split("<")[0]
          .trim()
      : "GitHub";
    /* eslint-enable indent */
  }
};
