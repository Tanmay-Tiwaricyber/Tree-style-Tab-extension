// background.js
chrome.tabs.onCreated.addListener((tab) => {
    // Logic to add the new tab as a child of the current tab
    console.log('Tab created:', tab);
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Logic to handle tab updates
    console.log('Tab updated:', tabId, changeInfo, tab);
  });
  
  chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    // Logic to handle tab removal
    console.log('Tab removed:', tabId);
  });
  