// options.js
document.addEventListener('DOMContentLoaded', () => {
    const enableFeatureCheckbox = document.getElementById('enableFeature');
    const saveButton = document.getElementById('saveButton');
  
    // Load the saved options
    chrome.storage.sync.get(['enableFeature'], (result) => {
      enableFeatureCheckbox.checked = result.enableFeature || false;
    });
  
    // Save the options when the save button is clicked
    saveButton.addEventListener('click', () => {
      chrome.storage.sync.set({ enableFeature: enableFeatureCheckbox.checked }, () => {
        console.log('Options saved');
        alert('Options saved');
      });
    });
  });
  