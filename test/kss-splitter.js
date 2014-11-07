var gulp = require('gulp'),
  chai = require('chai'),
  expect = chai.expect,
  fs = require('fs'),
  multiline = require('multiline'),
  kssSplitter = require('../lib/modules/kss-splitter');

describe('KSS divider', function() {

  it('should parse single KSS block', function() {
    var str = multiline(function() {
      /*
// Comment
// Styleguide 1.0

.a { b: c }
      */
    }),
    result = [
      [
        'block',
        [
          'kss',
          '// Comment\n// Styleguide 1.0\n'
        ],
        [
          'code',
          '.a { b: c }'
        ]
      ]
    ],
    kssBlocks = kssSplitter.getAst(str);
    expect(kssBlocks).eql(result);
  });

});
