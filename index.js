const http = require('http');
const { server: wisp } = require('@mercuryworkshop/wisp-js/server');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('wisp server is active');
});

server.on('upgrade', (req, socket, head) => {
    wisp.routeRequest(req, socket, head);
});

const PORT = 8080;
server.listen(PORT, () => { 
    console.log(`wisp server running on port ${PORT}`);
});
