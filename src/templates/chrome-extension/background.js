// {{projectTitle}} Background Service Worker
// Created: {{date}}

// Listen for extension installation
chrome.runtime.onInstalled.addListener((details) => {
  console.log('{{projectTitle}} installed:', details.reason);
  
  if (details.reason === 'install') {
    // First time install - set up defaults
    chrome.storage.local.set({
      installDate: new Date().toISOString()
    });
  }
});

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received:', request);

  if (request.action === 'buttonClicked') {
    // Handle button click from popup
    console.log('Button was clicked in popup');
    sendResponse({ success: true, message: 'Action processed' });
  }

  return true; // Keep message channel open for async response
});

// Example: Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log('Tab loaded:', tab.url);
    // Add your logic here
  }
});

// Example: Set up periodic tasks (optional)
// chrome.alarms.create('periodicTask', { periodInMinutes: 60 });
// chrome.alarms.onAlarm.addListener((alarm) => {
//   if (alarm.name === 'periodicTask') {
//     console.log('Running periodic task');
//   }
// });
