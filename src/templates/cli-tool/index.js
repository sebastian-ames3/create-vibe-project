#!/usr/bin/env node

// {{projectTitle}}
// Created: {{date}}
// Author: {{author}}

const { program } = require('commander');
const packageJson = require('./package.json');

program
  .name('{{projectName}}')
  .description('{{description}}')
  .version(packageJson.version);

// Example command
program
  .command('hello [name]')
  .description('Say hello to someone')
  .option('-u, --uppercase', 'output in uppercase')
  .action((name, options) => {
    const greeting = `Hello ${name || 'World'}!`;
    console.log(options.uppercase ? greeting.toUpperCase() : greeting);
  });

// Add your commands here

program.parse();
