# {{projectTitle}}

## Project Overview
{{description}}

Created: {{date}}
Author: {{author}}

## Project Type
Command Line Interface (CLI) Tool - Node.js

## File Structure
```
{{projectName}}/
├── index.js        # Main CLI entry point
├── package.json    # NPM package configuration
└── Claude.md       # This file - project documentation
```

## Current Features
- Commander.js for CLI framework
- Example "hello" command with options
- Version and help commands built-in
- Ready to add more commands

## Technology Stack
- Node.js (v14+)
- Commander.js for CLI parsing
- NPM for package management

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```

2. Test locally:
   ```bash
   node index.js hello World
   node index.js hello --uppercase
   node index.js --version
   node index.js --help
   ```

3. Link globally for testing:
   ```bash
   npm link
   {{projectName}} hello
   ```

## Adding New Commands
```javascript
program
  .command('your-command <required> [optional]')
  .description('What your command does')
  .option('-f, --flag', 'optional flag')
  .action((required, optional, options) => {
    // Your command logic here
    console.log(`Required: ${required}`);
    if (optional) console.log(`Optional: ${optional}`);
    if (options.flag) console.log('Flag is set');
  });
```

## Development Guidelines
- Keep commands simple and focused
- Provide helpful descriptions
- Use options for configuration
- Add error handling for edge cases
- Log clear success/error messages

## Publishing (Optional)
1. Update package.json version
2. Test with `npm link`
3. Login: `npm login`
4. Publish: `npm publish`

## Next Steps
- [ ] Define your CLI commands
- [ ] Add command implementations
- [ ] Add input validation
- [ ] Write help documentation
- [ ] Test with various inputs

## Notes
- Shebang (#!/usr/bin/env node) makes file executable
- Commander.js handles argument parsing automatically
- Use console.log for output, console.error for errors
- npm link creates a symlink for local testing

---
Built with create-vibe-project 🚀
