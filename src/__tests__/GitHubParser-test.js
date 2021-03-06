const GitHubParser = require("../GitHubParser");
const {
  newPullRequest,
  oldStyleComment,
  newStyleComment,
  newStyleCodeReview,
  withImage,
} = require("../../fixtures");

jest.unmock("fast-html-parser");
jest.unmock("../../fixtures");
jest.unmock("../Parser");
jest.unmock("../GitHubParser");

describe("the github parser class", () => {
  [newPullRequest, oldStyleComment, newStyleComment].forEach((fixture) => {
    const {
      raw,
      name,
      subject,
      message,
      userFullName,
      replyLink,
      avatar,
    } = fixture;

    describe(`using ${name} fixture`, () => {
      let parser;

      beforeEach(() => {
        parser = new GitHubParser({ message: raw });
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

      it("parses link", () => {
        return parser.parseAll().then((parsedData) => {
          expect(parsedData).toEqual(expect.objectContaining({ replyLink }));
        });
      });

      it("parses avatar", () => {
        return parser.parseAll().then((parsedData) => {
          expect(parsedData).toEqual(expect.objectContaining({ avatar }));
        });
      });
    });
  });

  describe("Using the new-style code reviews", () => {
    it("parses multiple code blocks", () => {
      return new GitHubParser(newStyleCodeReview)
        .parseAll()
        .then((parsedData) => {
          expect(parsedData).toEqual(
            expect.objectContaining({
              subject: "test",
              userFullName: "Brian Jacobel",
              replyLink:
                "https://github.com/bjacobel/gifs/pull/17#pullrequestreview-459735",
              message: newStyleCodeReview.parsed,
            }),
          );
        });
    });
  });

  describe("links and images", () => {
    const mdLink = "a [link](https://link.com)";
    const mdEmbed = "an ![embedded](https://image.com)";
    const slackLink = "a <https://link.com|link>";
    const slackEmbed = "an https://image.com";

    it("parses a fixture with images properly", () => {
      return new GitHubParser(withImage).parseAll().then((parsedData) => {
        expect(parsedData).toEqual(
          expect.objectContaining({ message: withImage.parsed }),
        );
      });
    });

    it("parses a single link out into Slack's link format", () => {
      return new GitHubParser({ "body-plain": mdLink })
        .parseAll()
        .then((parsedData) => {
          expect(parsedData.message).toEqual(slackLink);
        });
    });

    it("parses a single image embed out into Slack's image embed format", () => {
      return new GitHubParser({ "body-plain": mdEmbed })
        .parseAll()
        .then((parsedData) => {
          expect(parsedData.message).toEqual(slackEmbed);
        });
    });

    it("parses two links into... two links", () => {
      return new GitHubParser({ "body-plain": `${mdLink} - ${mdLink}` })
        .parseAll()
        .then((parsedData) => {
          expect(parsedData.message).toEqual(`${slackLink} - ${slackLink}`);
        });
    });

    it("parses two image embeds", () => {
      return new GitHubParser({ "body-plain": `${mdEmbed} - ${mdEmbed}` })
        .parseAll()
        .then((parsedData) => {
          expect(parsedData.message).toEqual(`${slackEmbed} - ${slackEmbed}`);
        });
    });

    it("parses a link, then an embed", () => {
      return new GitHubParser({ "body-plain": `${mdLink} - ${mdEmbed}` })
        .parseAll()
        .then((parsedData) => {
          expect(parsedData.message).toEqual(`${slackLink} - ${slackEmbed}`);
        });
    });

    it("parses an embed then a link", () => {
      return new GitHubParser({ "body-plain": `${mdEmbed} - ${mdLink}` })
        .parseAll()
        .then((parsedData) => {
          expect(parsedData.message).toEqual(`${slackEmbed} - ${slackLink}`);
        });
    });
  });

  describe("details blocks", () => {
    it("doesn't render them", () => {
      return new GitHubParser({
        "body-plain": "asdf <details><p>nope</p>\n<h1>idk</h1></details> 1234",
      })
        .parseAll()
        .then((parsedData) => {
          expect(parsedData).toEqual(
            expect.objectContaining({ message: "asdf  1234" }),
          );
        });
    });
  });
});
