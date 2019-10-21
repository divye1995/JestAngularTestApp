// const esModules = ['[thir-party-lib]'].join('|');

module.exports = {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": ["<rootDir>/setupJest.ts"],
    globals: {
      "ts-jest": {
        tsConfig: '<rootDir>/tsconfig.spec.json',
        "diagnostics":false,
        "allowSyntheticDefaultImports": true,
        "stringifyContentPathRegex": "\\.html$",
        astTransformers: [require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')],
      }
    },
    coverageDirectory:'<rootDir>/output/coverage/jest',
    transformIgnorePatterns: ["node_modules/"],
    "coverageReporters": [
      "text",
      "json",
    ],
    "reporters": [
      "default",
    ],
    snapshotSerializers: [
      'jest-preset-angular/AngularSnapshotSerializer.js',
      "jest-preset-angular/AngularSnapshotSerializer.js",
      "jest-preset-angular/HTMLCommentSerializer.js"
    ],
    "transform": {
      '^.+\\.(ts|html)$': 'ts-jest',
      "^.+\\.js$": "babel-jest",
    },
    modulePathIgnorePatterns: [],
    moduleNameMapper: {},
    testPathIgnorePatterns:['sampleCodes/'],
  };