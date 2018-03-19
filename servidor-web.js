const http = require('http');

http.createServer((request, response) => {
    response.end('hola55');
}).listen(3500);


console.log(proces.env.VARIABLE);