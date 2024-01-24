import type { Config } from 'jest'

const config: Config = {
  clearMocks: true,
  coverageProvider: 'v8',
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          keepClassNames: true,
          parser: {
            decorators: true,
            syntax: 'typescript',
            tsx: false,
          },
          target: 'es2017',
          transform: {
            decoratorMetadata: true,
            legacyDecorator: true,
          },
        },
        module: {
          noInterop: false,
          type: 'es6',
        },
      },
    ],
  },
}

export default config
