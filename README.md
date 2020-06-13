# Copy tabs as markdown links

This very simple extension registers two keybindings:

 - `Alt-C` copies the current tab as a markdown link.
 - `Shift-Alt-C` copies all tabs in the current window as markdown links.

If multiple tabs are included (`Ctrl-Click` to multiselect, or a window with 2+ tabs) they will be copied as a list.

If you'd like to change the format of the copy, fork the source code, it's so easy. Web extensions are the shell scripts of the browser.

## Related extensions

- [piroor/copy-selected-tabs-to-clipboard: Provides ability to copy title and URL of selected tabs to the clipboard for Firefox 63 and later.](https://github.com/piroor/copy-selected-tabs-to-clipboard). Supports everything this extension does, but it more complicated/configurable. Additionally, supports nested lists with the author's popular [Tree Style Tab](https://piro.sakura.ne.jp/xul/_treestyletab.html.en) extension.
