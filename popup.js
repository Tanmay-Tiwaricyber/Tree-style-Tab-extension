// popup.js
document.addEventListener('DOMContentLoaded', () => {
    const treeContainer = document.getElementById('tree');
    const reloadButton = document.getElementById('reloadButton');
  
    function loadTabs() {
      chrome.tabs.query({}, (tabs) => {
        treeContainer.innerHTML = ''; // Clear the tree container
        const tabTree = buildTabTree(tabs);
        renderTabTree(tabTree, treeContainer);
      });
    }
  
    reloadButton.addEventListener('click', loadTabs);
  
    loadTabs();
  });
  
  function buildTabTree(tabs) {
    const tabTree = {};
    tabs.forEach(tab => {
      const parentId = tab.openerTabId || 'root';
      if (!tabTree[parentId]) {
        tabTree[parentId] = [];
      }
      tabTree[parentId].push(tab);
    });
    return tabTree;
  }
  
  function renderTabTree(tree, container, parentId = 'root') {
    const children = tree[parentId] || [];
    const ul = document.createElement('ul');
    ul.classList.add('tree-list');
    children.forEach(tab => {
      const li = document.createElement('li');
      li.textContent = tab.title;
      li.classList.add('tab');
      li.addEventListener('click', () => {
        chrome.tabs.update(tab.id, { active: true });
      });
      ul.appendChild(li);
  
      renderTabTree(tree, li, tab.id);
    });
    container.appendChild(ul);
  }
  