module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    testMatch: ['**/tests/**/*.test.jsx'],
};