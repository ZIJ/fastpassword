import generatePassword from './fastpassword.js';

let argv = require('yargs')
    .usage('Usage: $0 [-l <length>]')
    .example('$0 -l 8', 'generate a 8-character password')
    .describe('l', 'password length')
    .help('h')
    .alias('h', 'help')
    .alias('l', 'length')
    .default('l', 8)
    .argv;

let length = argv.l;

let password = generatePassword(length);

console.log(password);
