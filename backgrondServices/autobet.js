chrome.runtime.onInstalled.addListener(() => {

});
let visitedURL = [];

const filter = {
    url: [
        {hostContains: "https://bc.game/game/classic-dice"},
    ],
};

chrome.webNavigation.onCompleted.addListener((details) => {                        //on document ready event
    chrome.scripting.executeScript(
    {
        target: {tabId: details.tabId},
        files:['js/history.js']
    },
    (injectionResults) => {
        
    }
);
}, filter);
