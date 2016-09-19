const Vinz = jest.fn();
Vinz.prototype = {
  get: jest.fn(() => new Promise(resolve => resolve())),
};

export default Vinz;
