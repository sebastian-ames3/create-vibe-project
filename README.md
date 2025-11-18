# create-vibe-project

CLI tool for generating project starter templates with pre-configured file structures and boilerplate code. Built for rapid prototyping and "vibe coding" workflows.

## Features

- 🚀 **4 Project Templates**: Web App, PWA, CLI Tool, Chrome Extension
- 📝 **Auto-Generated Claude.md**: Each project includes documentation
- 🎨 **Modern Boilerplate**: Clean, production-ready starter code
- 🔧 **Git Integration**: Automatic git initialization
- ⚡ **Interactive CLI**: Simple prompts or use flags for speed
- 🎯 **Template Variables**: Dynamic name/date/author replacement

## Installation

```bash
# Run directly with npx (recommended)
npx create-vibe-project

# Or install globally
npm install -g create-vibe-project
create-vibe-project
```

## Usage

### Interactive Mode
```bash
npx create-vibe-project
```

Answer the prompts to configure your project.

### Direct Mode with Flags
```bash
npx create-vibe-project --type web-app --name my-app --description "My awesome app"
```

### Options
- `-t, --type <type>` - Project type: `web-app`, `pwa`, `cli-tool`, `chrome-extension`
- `-n, --name <name>` - Project name (lowercase, hyphens only)
- `-d, --description <text>` - Project description
- `-V, --version` - Output version number
- `-h, --help` - Display help

## Project Templates

### 1. Simple Web App
HTML/CSS/JavaScript structure with:
- Semantic HTML5
- CSS with custom properties and flexbox
- JavaScript with error handling
- Responsive design

**Perfect for:** Landing pages, prototypes, simple apps

### 2. PWA (Progressive Web App)
Everything from Web App plus:
- Service worker for offline support
- Web app manifest for installability
- Mobile-first design
- Can be added to home screen

**Perfect for:** Mobile apps, offline-first apps

### 3. CLI Tool
Node.js command-line application with:
- Commander.js for CLI parsing
- Example commands with options
- Ready to publish to npm

**Perfect for:** Dev tools, automation scripts

### 4. Chrome Extension
Browser extension with Manifest V3:
- Popup interface
- Background service worker
- Chrome storage integration
- Message passing between components

**Perfect for:** Browser productivity tools, web automation

## What You Get

Every generated project includes:

```
your-project/
├── [Template-specific files]
├── Claude.md              # Comprehensive project documentation
└── .git/                  # Initialized git repository
```

Each `Claude.md` includes:
- Project overview and structure
- Technology stack details
- Getting started instructions
- Development guidelines
- Next steps checklist

## Examples

```bash
# Create a web app
npx create-vibe-project --type web-app --name portfolio

# Create a PWA
npx create-vibe-project --type pwa --name workout-tracker

# Create a CLI tool
npx create-vibe-project --type cli-tool --name my-tool

# Create a Chrome extension
npx create-vibe-project --type chrome-extension --name tab-manager
```

## Development

```bash
# Clone the repo
git clone https://github.com/sebastian-ames3/create-vibe-project.git
cd create-vibe-project

# Install dependencies
npm install

# Link for local testing
npm link

# Test it out
create-vibe-project
```

## Template Variables

All templates support dynamic replacement:
- `{{projectName}}` - Your project name
- `{{projectTitle}}` - Title Case version
- `{{description}}` - Project description
- `{{date}}` - Creation date
- `{{author}}` - Git user name

## Requirements

- Node.js 14 or higher
- Git (optional, for repo initialization)

## Philosophy

This tool is built for **rapid prototyping** and **learning by doing**. It gives you:
- ✅ Just enough structure to start building
- ✅ Modern best practices baked in
- ✅ Comprehensive docs to guide you
- ❌ Not overengineered
- ❌ Not opinionated about specifics

## Roadmap

Future enhancements:
- More project types (React, Express, etc.)
- Custom template support
- Auto-install dependencies
- GitHub repo creation integration
- Template versioning

## License

MIT

## Author

Sebastian Ames

---

**Built for vibe coding.** 🚀
