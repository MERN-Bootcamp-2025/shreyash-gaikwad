const http = require('http');
const routes =require('./routes');

const server = http.createServer(routes.route);

server.listen(3000);