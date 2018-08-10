const base = require('./jest.base.js');

module.exports = {
  ...base,
  collectCoverage: true,
  coverageReporters: [
    'json',
    'lcov',
  ],
};
