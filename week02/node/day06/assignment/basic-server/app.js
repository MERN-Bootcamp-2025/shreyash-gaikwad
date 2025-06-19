const express = require('express');
const get = require('./routes/get');
const body = require('body-parser');



const app=express();
const port=3000;

//for parsing the body
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.get('/',(req, res, next) => {
  console.log(`[${req.method}] ${req.url} - ${new Date().toISOString()}`);
  res.send(`<h1>Welcome to Express</h1>`);
  next();
});

app.use(get);


app.use((req,res,next)=>{
    res.status(404).send(`<h1>Page Not Found</h1>`);
})


app.listen(port,()=>{
    console.log(`server start at port no : ${port}`)
})