# {{projectTitle}}

## Project Overview
{{description}}

Created: {{date}}
Author: {{author}}

## Project Type
Progressive Web App (PWA) - Installable, offline-capable web application

## File Structure
```
{{projectName}}/
├── index.html          # Main HTML structure with PWA meta tags
├── styles.css          # Styling and layout
├── script.js           # JavaScript functionality
├── manifest.json       # PWA manifest for installability
├── service-worker.js   # Service worker for offline support
└── Claude.md           # This file - project documentation
```

## Current Features
- **Installable**: Can be installed on mobile/desktop
- **Offline Support**: Works without internet via service worker
- **Responsive**: Mobile-first design
- **App-like**: Standalone display mode
- Modern, clean UI design

## Technology Stack
- HTML5 with PWA meta tags
- CSS3 with custom properties
- Vanilla JavaScript (ES6+)
- Service Worker API for offline caching
- Web App Manifest for installability

## Getting Started
1. Serve the app with a local server (required for PWA features):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx serve
   ```
2. Open http://localhost:8000 in your browser
3. Check browser console for service worker registration
4. Install the app (look for install prompt or browser menu)

## PWA Features Setup

### Service Worker
- Caches app files for offline use
- Automatically activated on first visit
- Updates cache on new versions

### Manifest
- Defines app name, icons, colors
- Enables "Add to Home Screen"
- Controls display mode (standalone)

### Icons (TODO)
Create icons for your PWA:
- icon-192.png (192x192px)
- icon-512.png (512x512px)

## Testing PWA Features
1. Open Chrome DevTools
2. Go to "Application" tab
3. Check "Service Workers" section
4. Test offline mode with "Offline" checkbox
5. Check "Manifest" section for installability

## Development Guidelines
- Always test with HTTPS or localhost
- Service workers only work on secure origins
- Update CACHE_NAME when deploying changes
- Test offline functionality regularly

## Next Steps
- [ ] Create app icons (192x192 and 512x512)
- [ ] Test installation on mobile device
- [ ] Customize manifest colors and name
- [ ] Add more files to cache in service worker
- [ ] Test offline functionality

## Notes
- PWA features require HTTPS in production
- Service worker updates on page reload
- Cache strategy is "cache first, network fallback"
- Works on both mobile and desktop browsers

---
Built with create-vibe-project 🚀
