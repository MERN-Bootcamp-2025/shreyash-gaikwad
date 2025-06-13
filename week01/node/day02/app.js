//cerating the own server

// need the transfer protocall module for request and response
// const http = require('http.js'); .js added automatically
const http = require('http');


//1: used as a normal way
// function rqListener(request,response){
//     console.log(request);
// }

// const server = http.createServer(rqListener);

// //2:anonymous function
// const server = http.createServer(function(req,res){
//     console.log(req);
// });


//3:arrow function
const server = http.createServer((req,res)=>{
    console.log(req);
});

// http.createServer(rqListener);
// need the variable to capture the request which is comming


server.listen(3000);