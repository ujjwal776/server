const http = require('http');
const url = require('url');

function handler(req, res) {
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.write("Hello,I am webserver!");
    res.end();
}
const server = http.createServer(handler);

server.listen(3000);