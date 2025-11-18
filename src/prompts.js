const projectTypes = [
  {
    name: 'Simple Web App - HTML/CSS/JS structure',
    value: 'web-app'
  },
  {
    name: 'PWA - Progressive Web App with offline capability',
    value: 'pwa'
  },
  {
    name: 'CLI Tool - Node.js command-line application',
    value: 'cli-tool'
  },
  {
    name: 'Chrome Extension - Browser extension with manifest v3',
    value: 'chrome-extension'
  }
];

const questions = [
  {
    type: 'list',
    name: 'projectType',
    message: 'What type of project do you want to create?',
    choices: projectTypes,
    when: (answers) => !answers.type
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'Project name:',
    when: (answers) => !answers.name,
    validate: (input) => {
      const valid = /^[a-z0-9-]+$/.test(input);
      if (!valid) {
        return 'Project name must be lowercase letters, numbers, and hyphens only';
      }
      if (input.length < 3) {
        return 'Project name must be at least 3 characters';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Project description (optional):',
    when: (answers) => !answers.description
  }
];

module.exports = { questions, projectTypes };
