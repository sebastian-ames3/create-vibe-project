# Create Vibe Project - CLI Tool

## Project Overview
A command-line tool that generates project starter templates with pre-configured file structures, boilerplate code, and Claude.md documentation. Automates the repetitive setup work when starting new projects.

## Core Functionality
- Interactive CLI prompts for project type selection and configuration
- Automatic creation of project directories and files
- Generation of starter code based on project type
- Creation of Claude.md template for project documentation
- Git repository initialization
- Support for multiple project types with extensible template system

## Project Types to Support (v1)
1. **Simple Web App** - HTML/CSS/JS structure like the quote generator
2. **PWA (Progressive Web App)** - Mobile-first web app with offline capability
3. **CLI Tool** - Node.js command-line application
4. **Chrome Extension** - Browser extension with manifest v3

## Technology Stack
- **Runtime**: Node.js (v18+)
- **CLI Framework**: Commander.js (for command parsing and help text)
- **Prompts**: Inquirer.js (for interactive questions)
- **File Operations**: fs-extra (enhanced file system methods)
- **Templating**: Handlebars (for dynamic template generation)
- **Colors**: Chalk (for colored terminal output)
- **Package**: Publishable via npm/npx

## File Structure
```
create-vibe-project/
├── bin/
│   └── cli.js                 # Entry point for CLI
├── src/
│   ├── index.js              # Main logic
│   ├── prompts.js            # Question definitions
│   ├── templates/
│   │   ├── web-app/
│   │   │   ├── index.html
│   │   │   ├── styles.css
│   │   │   ├── script.js
│   │   │   └── Claude.md
│   │   ├── pwa/
│   │   │   ├── index.html
│   │   │   ├── styles.css
│   │   │   ├── script.js
│   │   │   ├── manifest.json
│   │   │   ├── service-worker.js
│   │   │   └── Claude.md
│   │   ├── cli-tool/
│   │   │   ├── index.js
│   │   │   ├── package.json
│   │   │   └── Claude.md
│   │   └── chrome-extension/
│   │       ├── manifest.json
│   │       ├── popup.html
│   │       ├── popup.js
│   │       ├── background.js
│   │       └── Claude.md
│   └── utils.js              # Helper functions
├── package.json
├── README.md
└── Claude.md                 # This file
```

## User Flow
1. User runs: `npx create-vibe-project`
2. CLI presents questions:
   - What type of project? (list of options)
   - Project name? (text input, validates format)
   - Description? (optional text input)
3. Tool creates project folder
4. Copies appropriate template files
5. Replaces template variables ({{projectName}}, etc.)
6. Initializes git repo
7. Shows success message with next steps

## Template Variables
Each template should support these dynamic replacements:
- `{{projectName}}` - Project name in kebab-case
- `{{projectTitle}}` - Project name in Title Case
- `{{description}}` - Project description
- `{{date}}` - Current date
- `{{author}}` - Git user name (if available)

## CLI Commands & Options
```bash
# Interactive mode (default)
npx create-vibe-project

# Direct mode with flags
npx create-vibe-project --type web-app --name my-project

# Show version
npx create-vibe-project --version

# Show help
npx create-vibe-project --help
```

## Error Handling
- Validate project name (no spaces, special chars except hyphens)
- Check if directory already exists (prompt to overwrite or cancel)
- Verify write permissions before creating files
- Handle missing git installation gracefully
- Catch and display file system errors clearly
- Validate all user inputs with helpful error messages

## Success Output
After successful creation, display:
```
✨ Project created successfully!

📁 Location: /path/to/project-name
📋 Files created: 5

Next steps:
  cd project-name
  # Open Claude.md to see project requirements
  # Start building!

Happy coding! 🚀
```

## Package.json Configuration
```json
{
  "name": "create-vibe-project",
  "version": "1.0.0",
  "description": "CLI tool for generating vibe coding project templates",
  "bin": {
    "create-vibe-project": "./bin/cli.js"
  },
  "keywords": ["cli", "template", "generator", "boilerplate"],
  "author": "Sebastian Ames",
  "license": "MIT"
}
```

## Template Content Requirements

### Web App Template
- Basic HTML5 structure with semantic tags
- CSS reset and flexbox/grid layout starter
- JavaScript with error handling and console logging
- Claude.md with web app project structure

### PWA Template
- Everything from Web App plus:
- manifest.json with app metadata
- service-worker.js for offline functionality
- Icons placeholder structure
- Install prompt handling

### CLI Tool Template
- package.json with bin configuration
- Commander.js setup
- Basic command structure
- Error handling pattern

### Chrome Extension Template
- manifest.json (v3)
- popup.html with basic UI
- background.js for extension logic
- Content script placeholder
- Icons structure

## Development Approach
1. Set up package.json and install dependencies
2. Create basic CLI entry point with Commander
3. Implement interactive prompts with Inquirer
4. Build file creation logic with fs-extra
5. Create first template (Web App) and test end-to-end
6. Add remaining templates
7. Add template variable replacement
8. Test edge cases and error scenarios
9. Polish output messages and colors
10. Test with `npm link` locally before publishing

## Testing Strategy
- Manually test each project type creation
- Verify all files are created correctly
- Check template variable replacement
- Test error cases (existing directory, invalid names)
- Confirm git initialization works
- Test on clean directory

## Future Enhancements (v2+)
- More project types (React app, Express API, etc.)
- Custom template support (user-defined templates)
- Interactive file browser to select templates
- Auto-install dependencies option
- Integration with GitHub repo creation
- Template updates/versioning system

## Notes
- Keep templates minimal but functional
- Focus on patterns that work for rapid prototyping
- Templates should be immediately usable
- Prioritize clarity over complexity in generated code
- Each Claude.md template should follow established format
