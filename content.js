// Create a side panel in the web page
const sidePanel = document.createElement('div');
sidePanel.id = 'voice-to-chatgpt-panel';
sidePanel.style.position = 'fixed';
sidePanel.style.right = '0';
sidePanel.style.top = '0';
sidePanel.style.width = '300px';
sidePanel.style.height = '100%';
sidePanel.style.backgroundColor = 'white';
sidePanel.style.borderLeft = '1px solid #ccc';
sidePanel.style.zIndex = '10000';
sidePanel.style.padding = '10px';
sidePanel.style.overflowY = 'auto';
sidePanel.style.display = 'none';  // Initially hidden

document.body.appendChild(sidePanel);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'togglePanel') {
    sidePanel.style.display = sidePanel.style.display === 'none' ? 'block' : 'none';
    sendResponse({status: 'toggled'});
  }
});
