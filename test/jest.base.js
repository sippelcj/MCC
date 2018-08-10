module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  rootDir: '../',
  setupFiles: [
    '<rootDir>/test/test-setup.js',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  moduleDirectories: [
    'src/app/react-toolkit',
    'node_modules',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.*',
  ],
};
