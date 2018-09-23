const Parser = require("./Parser");

module.exports = class JiraParser extends Parser {
  constructor(event) {
    super(event);

    const separator =
      "--" + /boundary=(.*)$/.exec(event.params.header["Content-Type"])[1];
    const parsed = event["body-json"]
      .split(separator)
      .slice(1)
      .reduce((prev, curr) => {
        try {
          const [
            _, // eslint-disable-line no-unused-vars
            key,
            val,
          ] = /name="([a-zA-Z-]+)"\s{4}([\s\S]*)\s{2}$/.exec(curr);
          return {
            ...prev,
            [key]: val,
          };
        } catch (e) {
          // These multiparts can be skipped.
          return prev;
        }
      }, {});

    this.message;
    this.html = parsed["body-html"];
    this.subject = parsed.Subject;
    this.username = parsed.From;
    this.lines = parsed["body-plain"]
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length);
    this.userFullName = parsed.From;
  }
};
