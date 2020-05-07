chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.executeScript(null, { file: 'bullets.js' }); });

chrome.contextMenus.onClicked.addListener( function(info, tab) {
  chrome.tabs.executeScript(null, { file: 'bullets.js' }); });

chrome.contextMenus.create({
  id: "bullet",
  contexts: ["selection"],
  title: "Add Bullets",
});


