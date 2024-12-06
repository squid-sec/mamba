# VSCode Extensions

### Local Execution

Ensure that you open folder of the extension you want to run in its own VSCode workspace, otherwise you may be unable to run the extension in development mode.

1. Run `npm install` in the terminal
2. Run `npm run compile` in the terminal
3. Click `F5` / `Start Debugging`
4. Select `Extension Development Host`

If the extension is activated on startup, you are all set. Otherwise, if the extension is activated via command, then...

5. Press `command + shift + p`
6. Search for the extension by name
7. Click on the extension name and it will activate
