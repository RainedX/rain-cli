#!/usr/bin/env node

const { program } = require('commander');
const checkNodeVersion = require('../lib/checkNodeVersion');
const pkg = require('../package.json');
const startServer = require('../lib/start/startServer');
const build = require('../lib/build/build');
const MIN_NODE_VSRSION = '16.0.0';

(async () => {
  try {
    if (!checkNodeVersion(MIN_NODE_VSRSION)) {
      throw new Error('Please upgrade your node version to v' + MIN_NODE_VSRSION)
    }

    program.version(pkg.version);

    program
          .command('start')
          .description('start imooc-build server')
          .allowUnknownOption()
          .action(startServer);
    program
          .command('build')
          .description('build project by imooc-build')
          .allowUnknownOption()
          .action(build);

    program.parse(process.argv);
  } catch (error) {
    console.log(error.message)
  }
})()