const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    const url = req.url;
    const method =req.method;
    if(req.url === '/'){
        res.write(`
        <html>
            <header>
                <title>Taking Inpute From user</title>
            <header>
            <body>
                <form action="/message" method="POST">
                    <input type="text"/>
                    <button type="submit" name="message">Send</button>
                </form>
            </body>
        '</html>'`);
        return res.end();
        //writing return because dont want to continew the below html
    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt','hello dummy');
        res.statusCode= 302;
        //302 status code is for the redirecting
        res.setHeader('Location','/');
        //seting the header to the / page
        return res.end();
    }
})

server.listen(3000);