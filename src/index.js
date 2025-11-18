const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const { questions } = require('./prompts');
const {
  toTitleCase,
  getCurrentDate,
  getGitUserName,
  copyTemplateFiles,
  initGit,
  directoryExists
} = require('./utils');

async function createProject(options) {
  console.log(chalk.cyan.bold('\n🚀 Create Vibe Project\n'));

  // Get answers from prompts or command line options
  let answers = {
    projectType: options.type,
    projectName: options.name,
    projectDescription: options.description
  };

  // If any required info is missing, run interactive prompts
  if (!answers.projectType || !answers.projectName) {
    const promptAnswers = await inquirer.prompt(questions.filter(q => {
      if (q.name === 'projectType' && answers.projectType) return false;
      if (q.name === 'projectName' && answers.projectName) return false;
      if (q.name === 'projectDescription' && answers.projectDescription) return false;
      return true;
    }));
    answers = { ...answers, ...promptAnswers };
  }

  const projectName = answers.projectName;
  const projectType = answers.projectType;
  const projectDescription = answers.projectDescription || `A ${projectType} project`;
  
  // Setup paths
  const targetDir = path.join(process.cwd(), projectName);
  const templateDir = path.join(__dirname, 'templates', projectType);

  // Check if directory already exists
  if (await directoryExists(targetDir)) {
    const overwrite = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'overwrite',
        message: `Directory "${projectName}" already exists. Overwrite?`,
        default: false
      }
    ]);

    if (!overwrite.overwrite) {
      console.log(chalk.yellow('❌ Project creation cancelled'));
      return;
    }

    await fs.remove(targetDir);
  }

  // Create project directory
  await fs.ensureDir(targetDir);

  // Setup template variables
  const variables = {
    projectName: projectName,
    projectTitle: toTitleCase(projectName),
    description: projectDescription,
    date: getCurrentDate(),
    author: getGitUserName()
  };

  // Copy template files
  console.log(chalk.blue('📝 Creating project files...'));
  const fileCount = await copyTemplateFiles(templateDir, targetDir, variables);

  // Initialize git
  console.log(chalk.blue('🔧 Initializing git repository...'));
  const gitInitialized = initGit(targetDir);

  // Success message
  console.log(chalk.green.bold('\n✨ Project created successfully!\n'));
  console.log(chalk.white(`📁 Location: ${targetDir}`));
  console.log(chalk.white(`📋 Files created: ${fileCount}`));
  
  if (gitInitialized) {
    console.log(chalk.green('✓ Git repository initialized'));
  }

  console.log(chalk.cyan.bold('\nNext steps:'));
  console.log(chalk.white(`  cd ${projectName}`));
  console.log(chalk.white('  # Open Claude.md to see project requirements'));
  console.log(chalk.white('  # Start building!'));
  console.log(chalk.yellow('\nHappy coding! 🚀\n'));
}

module.exports = { createProject };
