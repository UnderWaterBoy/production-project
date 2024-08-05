/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    setupFilesAfterEnv: [
        '<rootDir>config/jest/setupTests.ts',
    ],
    clearMocks: true,
    testEnvironment: 'jsdom',
    rootDir: '../../',
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },
};
