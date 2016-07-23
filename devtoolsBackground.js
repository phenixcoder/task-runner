chrome.devtools.panels.create(
    "Task Runner",
    "img/icon16.png",
    "screens/index.html",
    function() {
        chrome.devtools.panels.elements.createSidebarPane("Tasks List",
        function(sidebar) {
            // sidebar initialization code here
            sidebar.setObject({ some_data: "Some data to show" });
        });
    }
);
