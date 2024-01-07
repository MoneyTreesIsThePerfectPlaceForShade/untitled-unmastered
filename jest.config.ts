import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  clearMocks: true,
  errorOnDeprecated: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  // см. global.d.ts, по умолчанию в тестах будут именно эти значения глобальных переменных
  globals: {
    __PLATFORM__: 'desktop',
    __ENV__: 'development'
  }
};

export default config;
