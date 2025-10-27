chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "oxford",
    title: "Oxford",
    contexts: ["selection"] // show only when text selected
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "oxford") {
    chrome.windows.create({
      url: `https://www.oxfordlearnersdictionaries.com/definition/english/${info.selectionText.toLowerCase()}?q=${info.selectionText.toLowerCase()}`,
      type: "popup",   // popup = clean window without tabs
      width: 500,
      height: 600
    });
  }
});
