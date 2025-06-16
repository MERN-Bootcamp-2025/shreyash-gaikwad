const fs = require('fs');

const routes = (req,res) =>{
    const url =req.url;
    const method = req.method;
    if(url === '/'){
            console.log(url);
           res.write(`
            <html>
                <header>
                    <title>Hello Welcome to Node.js</title>
                </header>
                <body>
                    <form action="/message" method="POST">
                        <input type="text" name="message"/>
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>
            `);
            return res.end();
        }
    
        if(url === '/message' && method ==='POST'){
            const body =[];
            req.on('data',(chunk)=>{
                body.push(chunk);
                console.log(chunk);
            });
    
            //added return here because we cannot set header after return of res.end 
            return  req.on('end',()=>{
                const parseBody = Buffer.concat(body).toString();  
                // console.log(parseBody);
                const message = parseBody.split('=')[1];
                console.log(message);
    
                const decodeMessage =decodeURIComponent(message).replace(/\+/g,' ');
                fs.writeFileSync('async.txt',decodeMessage);
    
                res.statusCode=302;
                res.setHeader('Location','/');
               return res.end();
            }
        );
        res.setHeader('Content-Type','text/html');
        res.write(`<h1>hello i am shreyash gaikwad</h1>`);
        res.end();
}
}
// module.exports = routes;

// exports= routes;
//short hand syntex supported by node.js


module.exports = {
    route : routes,
}