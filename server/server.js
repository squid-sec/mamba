const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST route to handle requests
app.post('/data', (req, res) => {
    console.log('Received POST request:', req.body); // Log the request body to the console
    res.send('POST request received');
});

// GET route to send a Python file
app.get('/data', (req, res) => {
    const filePath = path.join(__dirname, 'math.py');
    res.download(filePath, 'math.py', (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('Failed to send file');
        } else {
            console.log('Python file sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
