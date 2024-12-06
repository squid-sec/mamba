# Server

This server acts as the remote server for the exfiltration and infiltration VSCode extensions.

### API Endpoints

*POST /data*
This endpoint prints out to the console the request body that was received. It is intended to showcase the abilities of the exfiltration VSCode extension.

*GET /data*
This endpoint sends the Python file `math.py` to the requestor. It is intended to showcase the abilities of the infiltration VSCode extension.

### Local Execution
1. Run `npm install` in the terminal
2. Run `node server.js` in the terminal
3. You should then see `Server is running on http://localhost:{port}` in the console output
