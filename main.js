chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "open",
        title: "open nhentai",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open") {
        const targetURL = `https://nhentai.net/g/${info.selectionText.trim()}/`;
        chrome.tabs.create({ url: targetURL });
        }
    }
);

