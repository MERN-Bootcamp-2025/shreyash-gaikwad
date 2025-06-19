const express = require('express');
const route=express.Router();



route.get('/about',(req,res,next)=>{
    res.send(`<h1>About this app</h1>`)

})

route.get('/submit',(req,res,next)=>{
    res.send(
        `
        <form action="/submitRes" method="POST">
        <input type="text" name="name" placeholder="add name"/>
        <input type="text" placeholder="add message" name="message"/>
        <button>Add Message</button>
        </form>
        `
    )
})


route.post('/submitRes',(req,res,next)=>{
    const {name} =req.body;
    res.send(`Thank you ${name}`);
})

module.exports=route;