chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "open",
        title: "open nhentai/x",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open") {
        if (info.selectionText.trim().charAt(0) == "@") {
            const targetURL = `https://x.com/${info.selectionText.trim()}/`;
            chrome.tabs.create({ url: targetURL }); //can't combine
        }
        else {
            const targetURL = `https://nhentai.net/g/${info.selectionText.trim()}/`;
            chrome.tabs.create({ url: targetURL }); //can't combine
        }
    }
});