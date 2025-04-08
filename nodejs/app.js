const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "</h1>");
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1> Hello World! </h1>");
  }
}
const server = http.createServer(handleRequest);

server.listen(3000);

// amazon.com = > send a request to Amazon's server
// Entrypoints for network traffic. Http requests sent for your browser to some remote machine require such an entrypoint in order to be handled by the server
// amazon.com:443 (80)
