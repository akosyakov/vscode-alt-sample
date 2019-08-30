import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World! (Primary)');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('extension.helloWorld.alt', () => {
		vscode.window.showInformationMessage('Hello World! (Alt)');
	}));
}

export function deactivate() { }
