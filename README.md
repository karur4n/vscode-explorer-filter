# Explorer Filter

## Features

Explorer Filter is a VS Code extension that allows you to filter and jump to a folder in the Explorer view.

## Default Keybindings

Recommended: Assign keybindings that are easy for you to use!

`explorer-filter.filter`

- `cmd+/`
- Filter in the Explorer view. (This is alias of vscode default `list.find` command)

`explorer-filter.reveal`

- `cmd+enter`
- Reveal a folder in the Explorer view.

## Known Issues

- Uses the user's clipboard to share the resource path in order to open the selected resource in the filesExplorer
  - ref: [visual studio code \- Get focused Explorer folder or file in an extension when command triggered by a shortcut, not by context menu \- Stack Overflow](https://stackoverflow.com/questions/62945928/get-focused-explorer-folder-or-file-in-an-extension-when-command-triggered-by-a)
