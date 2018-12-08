'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {

        const logChannel = vscode.window.createOutputChannel("My logs");
        logChannel.appendLine("Hello from plugin!");

        vscode.window.showInformationMessage('Hello World!');

        console.log('Congratulations, your extension "extension-context" is now active!');
        console.log('Log path', context.logPath);
        console.log(context.extensionPath);
        context.workspaceState.update("someKey", "some value");
        console.log(context.workspaceState.get("someKey"));
        context.globalState.update("someKeyG", "some value");
        console.log(context.globalState.get("someKeyG"));
        console.log(context.storagePath);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}