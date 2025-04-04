const http = require("http");

function handleRequest(request, response) {}
const server = http.createServer(handleRequest);

server.listen(3000);

// amazon.com = > send a request to Amazon's server
// Entrypoints for network traffic. Http requests sent for your browser to some remote machine require such an entrypoint in order to be handled by the server
// amazon.com:443 (80)
