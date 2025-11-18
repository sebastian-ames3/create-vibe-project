const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Convert kebab-case to Title Case
 */
function toTitleCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Get current date in YYYY-MM-DD format
 */
function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

/**
 * Get git user name if available
 */
function getGitUserName() {
  try {
    return execSync('git config user.name', { encoding: 'utf8' }).trim();
  } catch (error) {
    return 'Developer';
  }
}

/**
 * Replace template variables in content
 */
function replaceTemplateVariables(content, variables) {
  let result = content;
  Object.keys(variables).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, variables[key]);
  });
  return result;
}

/**
 * Copy template files and replace variables
 */
async function copyTemplateFiles(templateDir, targetDir, variables) {
  const files = await fs.readdir(templateDir);
  let fileCount = 0;

  for (const file of files) {
    const sourcePath = path.join(templateDir, file);
    const targetPath = path.join(targetDir, file);
    
    const content = await fs.readFile(sourcePath, 'utf8');
    const processedContent = replaceTemplateVariables(content, variables);
    
    await fs.writeFile(targetPath, processedContent);
    fileCount++;
  }

  return fileCount;
}

/**
 * Initialize git repository
 */
function initGit(projectPath) {
  try {
    execSync('git init', { cwd: projectPath, stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Check if directory exists
 */
async function directoryExists(dirPath) {
  try {
    const stats = await fs.stat(dirPath);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
}

module.exports = {
  toTitleCase,
  getCurrentDate,
  getGitUserName,
  replaceTemplateVariables,
  copyTemplateFiles,
  initGit,
  directoryExists
};
