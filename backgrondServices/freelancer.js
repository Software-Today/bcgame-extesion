chrome.runtime.onInstalled.addListener(() => {

});
let visitedURL = [];

const filter = {
    url: [
        {hostContains: "slack.com"},
    ],
};

chrome.webNavigation.onCompleted.addListener((details) => {                        //on document ready event
    
    chrome.scripting.executeScript(
    {
        target: {tabId: details.tabId},
        files:['js/autoBidInFreelancer.js']
    },
    (injectionResults) => {
        
    }
);
}, filter);
