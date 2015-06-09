#! /usr/bin/env node

import generatePassword from './fastpassword.js';

let argv = require('yargs')
    .usage('Usage: $0 [-l <length>] [-d <depth>]')
    .describe('l', 'password length')
    .describe('d', 'same finger threshold')
    .help('h')
    .alias('h', 'help')
    .alias('l', 'length')
    .alias('d', 'depth')
    .default('l', 8)
    .default('d', 3)
    .argv;

let length = argv.l;
let depth = argv.d;

let password = generatePassword(length, depth);

console.log(password);
