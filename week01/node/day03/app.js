const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req);
    //method to exite or stop the running server which we never use
    process.exit();
})

server.listen(3000);