const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Node.js Server!' });
});

app.post('/api/data', (req, res) => {
    console.log('Received:', req.body);
    res.json({ status: 'success', data: req.body });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
