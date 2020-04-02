module.exports = {
    verbose: false,
    testMatch: ['**/(*.)unit.js'],
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
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
