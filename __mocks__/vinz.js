const Vinz = jest.fn();
Vinz.prototype = {
  get: jest.fn(() => new Promise((resolve) => resolve())),
};

module.exports = {
  default: Vinz,
};
