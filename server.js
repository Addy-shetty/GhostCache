const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to handle scans
app.post('/scan', (req, res) => {
    const { domain } = req.body;
    
    if (!domain) {
        return res.status(400).json({ error: 'Domain is required' });
    }

    // Configure response for streaming
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Transfer-Encoding', 'chunked');

    // Execute backmeup.sh
    const scanner = spawn('bash', ['backmeup.sh', '-d', domain]);

    // Progress tracking variables
    let progress = 0;
    const tools = ['gospider', 'crawley', 'cariddi', 'gau', 'gauplus', 'hakrawler', 'katana', 'waybackurls', 'waymore'];
    const progressIncrement = 100 / tools.length;

    scanner.stdout.on('data', (data) => {
        const output = data.toString();
        
        // Check for tool completion pattern
        if (output.includes('[+]')) {
            progress += progressIncrement;
            res.write(JSON.stringify({
                progress: Math.min(progress, 100),
                message: `${output.trim()} completed (${Math.round(progress)}%)`
            }) + '\n');
        }
        
        // Send results
        if (output.includes('possible_leaked_data')) {
            res.write(JSON.stringify({
                result: output
            }) + '\n');
        }
    });

    scanner.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    scanner.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        res.end();
    });
});

// Start server
app.listen(port, () => {
    console.log(`BackMeUp web interface running at http://localhost:${port}`);
});

// Frontend route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
