const http =require('http');
const express = require('express');
const body = require('body-parser')
const app = express();
const adminRoutes = require('./routes/admin');
const shopeRoutes = require('./routes/shope');


app.use(body.urlencoded({extended:false}));

// app.use((req,res,next)=>{
//     console.log("into the middleware");
//     next();
//     // next function allow us go to the next function or middleware
// })

// app.use((req,res,next)=>{
//     console.log("into the  next middleware");
//     // res.send("hello from express");
//     // next();
//     res.send('<h1>Hello from Express</h1>');
// })

// app.use((req,res,next)=>{
//     console.log("into the 3 middleware");
//     res.send('<h1>Hello from Express</h1>');
// })



//-------------------------------------------------------------------------------------------------
// const server = http.createServer(app);

// server.listen(3000,()=>{
//     console.log("server started at 3000");
// });


//we can use app.listen() here in express above code is written inside app.listen() function


// app.use('/',(req,res,next)=>{
//     const url=req.url;
//    checking if the url is different than / to /app can it still work
//     console.log('inside the rute middleware', 'url is', url);
//     res.send('<h1> Hello from express</h1>');
// })
//---------------------------------------------------------------------------------------------------

// app.use('/app',(req,res,next)=>{
//     const url=req.url;c
//     console.log('inside the rute middleware', 'url is', url);
//     res.send('<h1> Hello from express</h1>');
//     // next();
// });



// app.use('/',(req,res,next)=>{
//     console.log('inside the rute middleware', 'url is  /');
//     res.send('<h1> Hello from express</h1>');
// })

//---------------------------------------------------------------------------------------------------------

// app.use('/add',(req,res,next)=>{
//     console.log('inside the rute middleware', 'url is  add');
//     res.send('<h1> Hello from express</h1>');
// })

// app.use('/app',(req,res,next)=>{
//     console.log('inside the rute middleware', 'url is  app');
//     res.send('<h1> Hello from express</h1>');
// })

// -------------------------------------------------------------------------------------------------------------
//multipal routes in array 
// app.use(['/about','/add'],(req,res,next)=>{
//     res.send('<h1> Hello from express</h1>');
// })
// -------------------------------------------------------------------------------------------------------------

//parsing the incoming request

// app.use('/add-product',(req,res,next)=>{
//     res.send(`
//         <form action="/product" method="POST">
//         <h1>Added The Product</h1>
//         <input type="text" name="product"/>
//         <button>Add</button>
//         </form>
//         `);
// })


// app.post('/product',(req,res,next)=>{
//     console.log(req.body);
//     //getting the product res.body without parsing which is why it will show in console undefined
//     console.log('product added');
//     res.redirect("/");
// })

// app.use('/',(req,res,next)=>{
//     res.send('at the root /');
// })


//filtering the routing
app.use('/admin' , adminRoutes);
app.use(shopeRoutes);

app.use((req,res,next)=>{
    res.status(404).send(`<h1>page not fount</h1>`);
})

app.listen(3000,()=>{
    console.log('server start on the 3000 port');
})