module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  verbose: false,
  testMatch: ['**/(*.)unit.js'],
  setupFiles: ['<rootDir>/resources/js/tests/unit/setup'],
  globalSetup: '<rootDir>/resources/js/tests/unit/global-setup',
  globalTeardown: '<rootDir>/resources/js/tests/unit/global-teardown',
  setupFilesAfterEnv: ['<rootDir>/resources/js/tests/unit/custom-matchers'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '.+\\.(css|scss|jpe?g|png|gif|webp|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$':
      'jest-transform-stub'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'resources/js/**/*.{js,vue}',
    '!**/node_modules/**'
  ],
  coverageReporters: [
    'html',
    'text-summary'
  ],
  coverageDirectory: '<rootDir>/build/jest/coverage'
}
