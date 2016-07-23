
// tabId -> devtool port
var inspectedTabs = {};

// tabId -> buffered data
var data = {};

chrome.devtools.panels.create("My Panel",
    "screens/index.html",
    function(panel) {
        console.log('panel', panel);
      // code invoked on panel creation
    }
);
