# infiltration VSCode Extension

infiltration VSCode extension attempts to receive a Python file from a remote server on startup of VSCode and then execute the file. It makes a GET request to the server which sends the Python file. The Python file is then executed and its output is logged.

This code is intended to showcase the ability of a VSCode extension to receive data from a remote server.

### Local Execution

1. Run the server (instructions on how to do this exist in the server README)
2. Activate the exfiltration extension (instructions on how to do this exist in the root README)
3. In the VSCode information messages, you should see the result of running the Python file
