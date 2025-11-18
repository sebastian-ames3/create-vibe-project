// {{projectTitle}} Popup Script
// Created: {{date}}

document.addEventListener('DOMContentLoaded', () => {
  const actionBtn = document.getElementById('actionBtn');
  const status = document.getElementById('status');

  // Handle button click
  actionBtn.addEventListener('click', async () => {
    try {
      // Example: Save data to Chrome storage
      await chrome.storage.local.set({ 
        lastClicked: new Date().toISOString() 
      });

      // Show success message
      showStatus('Action completed!', 'success');

      // Example: Send message to background script
      chrome.runtime.sendMessage({ 
        action: 'buttonClicked' 
      }, (response) => {
        console.log('Background response:', response);
      });

    } catch (error) {
      console.error('Error:', error);
      showStatus('Error occurred', 'error');
    }
  });

  // Load saved data on popup open
  loadSavedData();
});

// Show status message
function showStatus(message, type) {
  const status = document.getElementById('status');
  status.textContent = message;
  status.className = type;
  status.style.display = 'block';

  setTimeout(() => {
    status.style.display = 'none';
  }, 3000);
}

// Load any saved data
async function loadSavedData() {
  try {
    const data = await chrome.storage.local.get(['lastClicked']);
    if (data.lastClicked) {
      console.log('Last clicked:', data.lastClicked);
    }
  } catch (error) {
    console.error('Error loading data:', error);
  }
}
