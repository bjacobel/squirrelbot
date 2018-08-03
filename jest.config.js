module.exports = {
  automock: true,
  testRegex: "tests/.*-test.js$",
  collectCoverageFrom: ["src/**/*.js"],
  moduleDirectories: ["<rootDir>/node_modules"],
  testURL: "http://localhost",
  coverageReporters: ["text", "lcov", "html"],
  coverageDirectory: "<rootDir>/reports/coverage",
  coveragePathIgnorePatterns: [".eslintrc.js", "pm2.config.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "node",
};
