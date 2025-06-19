const express = require('express')

const route=express.Router();
//calling it as a function

route.get('/add-product',(req,res,next)=>{
    res.send(`
        <form action="/product" method="POST">
        <h1>Added The Product</h1>
        <input type="text" name="product"/>
        <button>Add</button>
        </form>
        `);
});

route.post('/product',(req,res,next)=>{
    console.log(req.body);
    //getting the product res.body without parsing which is why it will show in console undefined
    console.log('product added');
    res.redirect("/");
})


module.exports=route;
