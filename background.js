let mdLink = tab => `[${tab.title}](${tab.url})`;

function logTabs(tabs) {
    var result
    if (tabs.length == 1) {
        result = mdLink(tabs[0]);
    } else {
        result = tabs.map(t => ` * ${mdLink(t)}\n`).join("")
    }
    navigator.clipboard.writeText(result);
}


browser.commands.onCommand.addListener(function (command) {
  if (command === "copy-highlighted-tabs") {
    browser.tabs.query({currentWindow: true, highlighted: true}).then(logTabs, console.error);
  }
  if (command === "copy-window-tabs") {
    browser.tabs.query({currentWindow: true}).then(logTabs, console.error);
  }
});
