chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install")
    chrome.storage.sync.set(
        {
        defaultRecipient: '',
        debug: false,
        overlay: true
      });
  else if ((details.reason == "update" && details.previousVersion.startsWith("0.1")))
    chrome.storage.sync.set(
        {
        defaultRecipient: '',
        debug: false,
        overlay: true
      });
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({file: "capture.js"});
});
