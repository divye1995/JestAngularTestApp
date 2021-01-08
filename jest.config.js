// const esModules = ['[thir-party-lib]'].join('|');

module.exports = {
  globals: {
    "ts-jest": {
        "diagnostics":false,
      "allowSyntheticDefaultImports": true,
      "stringifyContentPathRegex": "\\.html$",
      "astTransformers": [
        "jest-preset-angular/build/InlineFilesTransformer",
        "jest-preset-angular/build/StripStylesTransformer"
      ],
      "snapshotSerializers": [
        "jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js",
        "jest-preset-angular/build/AngularSnapshotSerializer.js",
        "jest-preset-angular/build/HTMLCommentSerializer.js"
      ],
    }
  },
  transformIgnorePatterns: [`<rootDir>/node_modules/`],
  "transform": {
    "^.+\\.js$": "babel-jest"
  },
  
};