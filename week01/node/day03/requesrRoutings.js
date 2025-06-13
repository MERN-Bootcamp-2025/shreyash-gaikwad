const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    if(req.url === '/'){
        res.write(`
        <html>
            <header>
                <title>Taking Inpute From user</title>
            <header>
            <body>
                <form action="/message" method="post">
                    <input type="text"/>
                    <button type="submit" name="message">Send</button>
                </form>
            </body>
        '</html>'`);
        return res.end();
        //writing return because dont want to continew the below html
    }
    res.write('<html>');
    res.write('<header><title>hello this is the Header</title><header>');
    //used the template litreals here for multiple lines
    res.write(`<body><h1>Welcome To the Mindbowser</h1>
        <table>
            <tr>
                <td>
                No
                </td>
                <td>
                Name
                </td>
            </tr>
        </table>
        </body>`);
    res.write('</html>');

})

server.listen(3000);