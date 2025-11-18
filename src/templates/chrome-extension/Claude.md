# {{projectTitle}}

## Project Overview
{{description}}

Created: {{date}}
Author: {{author}}

## Project Type
Chrome Extension (Manifest V3)

## File Structure
```
{{projectName}}/
├── manifest.json    # Extension configuration (Manifest V3)
├── popup.html       # Extension popup UI
├── popup.js         # Popup functionality
├── background.js    # Background service worker
└── Claude.md        # This file - project documentation
```

## Current Features
- Popup interface with action button
- Chrome storage for data persistence
- Background service worker
- Message passing between components
- Modern Manifest V3 structure

## Technology Stack
- Chrome Extension APIs (Manifest V3)
- HTML/CSS for popup UI
- Vanilla JavaScript
- Chrome Storage API
- Service Worker for background tasks

## Getting Started

### Load Extension in Chrome
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right)
3. Click "Load unpacked"
4. Select this project folder
5. Extension is now loaded!

### Test the Extension
1. Click the extension icon in Chrome toolbar
2. Popup should open
3. Click the action button
4. Check background script console:
   - Go to `chrome://extensions/`
   - Click "service worker" under your extension
   - View logs in DevTools

## Extension Components

### manifest.json
- Defines extension metadata
- Declares permissions needed
- Configures popup and background script
- Uses Manifest V3 format

### popup.html/popup.js
- UI shown when clicking extension icon
- Can interact with current tab
- Stores/retrieves data with Chrome storage
- Sends messages to background script

### background.js
- Runs as service worker in background
- Handles extension lifecycle events
- Listens for messages from popup
- Can monitor tab changes

## Chrome APIs Used
- `chrome.storage.local` - Store data persistently
- `chrome.runtime` - Message passing, events
- `chrome.tabs` - Tab information and control

## Development Guidelines
- Test after each change by reloading extension
- Check console in popup DevTools
- Check service worker console for background logs
- Use Chrome storage for any persistent data
- Follow Manifest V3 best practices

## Icons (TODO)
Create icons for your extension:
- icon16.png (16x16px)
- icon48.png (48x48px)
- icon128.png (128x128px)

## Next Steps
- [ ] Create extension icons
- [ ] Define core functionality
- [ ] Add necessary permissions to manifest
- [ ] Implement popup UI
- [ ] Add background script logic
- [ ] Test thoroughly in Chrome

## Publishing (Optional)
1. Create icon files
2. Test extension thoroughly
3. Zip extension folder
4. Go to Chrome Web Store Developer Dashboard
5. Pay one-time $5 fee
6. Upload and submit for review

## Notes
- Manifest V3 is the current standard
- Service workers replace persistent background pages
- Some APIs require additional permissions
- Test on multiple Chrome versions
- Read Chrome Extension docs for advanced features

---
Built with create-vibe-project 🚀
