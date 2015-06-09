'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _fastpasswordJs = require('./fastpassword.js');

var _fastpasswordJs2 = _interopRequireDefault(_fastpasswordJs);

var argv = require('yargs').usage('Usage: $0 [-l <length>] [-d <depth>]').describe('l', 'password length').describe('d', 'same finger threshold').help('h').alias('h', 'help').alias('l', 'length').alias('d', 'depth')['default']('l', 8)['default']('d', 3).argv;

var length = argv.l;
var depth = argv.d;

var password = (0, _fastpasswordJs2['default'])(length, depth);

console.log(password);