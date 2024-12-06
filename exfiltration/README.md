# exfiltration VSCode Extension

exfiltration VSCode extension attempts to send data from the target machine to a remote server on startup of VSCode. It iterates through every file on the target machine and sends a POST request to the server with the file's contents as the payload. Any file that the user on the target machine has access to will be successfully exfiltrated. The implementation here waits one second in between each POST request in order to slow down the execution of the script. Note that for a number of files, the POST request cannot handle their size leading to failed requests. In order to combat this, you could chunk the files into more manageable pieces that are sent individually to the server.

This code is intended to showcase the ability of a VSCode extension to send data from the target machine to a remote server.

### Local Execution

1. Run the server (instructions on how to do this exist in the server README)
2. Activate the exfiltration extension (instructions on how to do this exist in the root README)
3. In the console of the server, you should see POST requests coming in with file contents in the payload
