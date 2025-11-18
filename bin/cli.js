#!/usr/bin/env node

const { program } = require('commander');
const { createProject } = require('../src/index');
const packageJson = require('../package.json');

program
  .name('create-vibe-project')
  .description('CLI tool for generating vibe coding project templates')
  .version(packageJson.version)
  .option('-t, --type <type>', 'Project type (web-app, pwa, cli-tool, chrome-extension)')
  .option('-n, --name <name>', 'Project name')
  .option('-d, --description <description>', 'Project description')
  .action(async (options) => {
    try {
      await createProject(options);
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

program.parse();
