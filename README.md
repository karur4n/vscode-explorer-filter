# Explorer Filter

https://github.com/user-attachments/assets/3c25339d-cbdb-4746-af88-b6585d99eb55

## Features

Explorer Filter is a VS Code extension that allows you to filter and jump to a folder in the Explorer view.

## Keybindings

Recommended: Assign keybindings that are easy for you to use!

### `explorer-filter.filter`

- default keybinding: `cmd+/`
- Filter in the Explorer view. (This is alias of vscode default `list.find` command)
  - **After launching `list.find`, you need to set it to filter mode yourself**
    - 😀 If you know how to automatically set it to filter mode, please let me know!

### `explorer-filter.reveal`

- default keybinding: `cmd+enter`
- Reveal a folder in the Explorer view.

## Known Issues

⚠️ Uses the user's clipboard to share the resource path in order to open the selected resource in the filesExplorer

ref:
[visual studio code \- Get focused Explorer folder or file in an extension when command triggered by a shortcut, not by context menu \- Stack Overflow](https://stackoverflow.com/questions/62945928/get-focused-explorer-folder-or-file-in-an-extension-when-command-triggered-by-a)
