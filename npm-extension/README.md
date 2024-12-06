# npm-extension VSCode Extension

npm-extension VSCode extension attempts to create a reverse shell by importing an NPM package which has the functionality to execute the reverse shell.

This code is intended to showcase the ability of a VSCode extension to import a malicious package which then is used to infiltrate a system with the extension itself appearing to be harmless.

### Local Execution

1. Run `brew instal nmap` in the terminal (Mac)
2. Run `ncat -lvnp {port}` in the terminal
3. You should then see something that looks like:
```
Ncat: Listening on [::]:80
Ncat: Listening on 0.0.0.0:80
```
4. Activate the npm-extension extension (instructions on how to do this exist in the root README)
5. You should then see something that looks like `Ncat: Connection from {local IP address}:{port}.`
6. You should now be able to execute commands in the terminal as if you were the user on the machine who activated the execution --> reverse shell!
