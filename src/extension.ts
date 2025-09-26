import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable1 = vscode.commands.registerCommand(
    "explorer-filter.filter",
    async () => {
      vscode.commands.executeCommand("list.find");
    }
  );

  context.subscriptions.push(disposable1);

  const disposable2 = vscode.commands.registerCommand(
    "explorer-filter.reveal",
    async () => {
      await vscode.commands.executeCommand("copyFilePath");
      const filePath = await vscode.env.clipboard.readText();
      const fileUri = vscode.Uri.file(filePath);

      await vscode.commands.executeCommand("list.closeFind");

      // Adjusted value based on actual testing
      await sleep(300);

      vscode.commands.executeCommand("revealInExplorer", fileUri);
    }
  );

  context.subscriptions.push(disposable2);
}

export function deactivate() {}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
