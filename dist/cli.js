'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _fastpasswordJs = require('./fastpassword.js');

var _fastpasswordJs2 = _interopRequireDefault(_fastpasswordJs);

var argv = require('yargs').usage('Usage: $0 [-l <length>]').example('$0 -l 8', 'generate a 8-character password').describe('l', 'password length').help('h').alias('h', 'help').alias('l', 'length')['default']('l', 8).argv;

var length = argv.l;

var password = (0, _fastpasswordJs2['default'])(length);

console.log(password);