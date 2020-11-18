

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => 
{
    if (req.url === '/') 
    {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => 
        {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })
    }
    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })
    }
    if (req.url === '/api/users') {
        const data = [
            { name: 'Dwight', age: 40 },
            { name: 'Andy', age: 33 },
            { name: 'Kelly', age: 45 },
        ]

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("localhost:" + PORT))