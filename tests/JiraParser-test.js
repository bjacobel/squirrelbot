const JiraParser = require("../src/JiraParser");
const { priorityChange } = require("../fixtures/jira");

jest.unmock("fast-html-parser");
jest.unmock("../fixtures");
jest.unmock("../src/Parser");
jest.unmock("../src/JiraParser");

describe("the jira parser class", () => {
  [
    {
      fixture: priorityChange,
      subject:
        "[JIRA] (SITE-372) Implement basic WAF rules for api and firstorder",
      message: "",
      userFullName:
        '"Kasiana McLenaghan (JIRA)" <jira@axioscode.atlassian.net>', // eslint-disable-line quotes
    },
  ].forEach((testCase) => {
    const { fixture, subject, message, userFullName } = testCase;
    describe(`using ${fixture.context["request-id"]} fixture`, () => {
      let parser;

      beforeEach(() => {
        parser = new JiraParser(fixture);
      });

      it("parses subject", () => {
        return parser.parseAll().then((parsedData) => {
          expect(parsedData).toEqual(expect.objectContaining({ subject }));
        });
      });

      it("parses message", () => {
        return parser.parseAll().then((parsedData) => {
          expect(parsedData).toEqual(expect.objectContaining({ message }));
        });
      });

      it("parses username", () => {
        return parser.parseAll().then((parsedData) => {
          expect(parsedData).toEqual(expect.objectContaining({ userFullName }));
        });
      });
    });
  });
});
