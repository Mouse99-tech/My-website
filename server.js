const express = require('express');
const path = require('path');

const app = express();
// Render এর জন্য PORT পরিবর্তন করতে হবে
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files serve করার সঠিক পদ্ধতি
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Node.js Server!' });
});

app.post('/api/data', (req, res) => {
    console.log('Received:', req.body);
    res.json({ status: 'success', data: req.body });
});

// Home route - সঠিক HTML ফাইল serve করা
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server - Render এর জন্য এটি ঠিক আছে
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
