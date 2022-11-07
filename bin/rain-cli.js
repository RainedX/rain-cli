#!/usr/bin/env node

const  { program } = require('commander')

program
  .option('--first <char>')
  .version('0.0.1');
program.parse()

const options = program.opts()
console.log(options);