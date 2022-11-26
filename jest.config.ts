export default {
  preset: 'jest-puppeteer',
  clearMocks: true,
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'src/types/*'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  
  //testEnvironment: 'jsdom',
  globalSetup: "jest-environment-puppeteer/setup",
  globalTeardown: "jest-environment-puppeteer/teardown",
  testEnvironment: "jest-environment-puppeteer",

  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/tests/.|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': 'svg-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/transformation/fileTransformer.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@customizations(.*)$': '<rootDir>/src/customizations$1',
    '^@views(.*)$': '<rootDir>/src/views$1',
    '^@repositories(.*)$': '<rootDir>/src/repositories$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@src(.*)$': '<rootDir>/src$1',
  },
  setupFiles: ['dotenv/config'],
};
