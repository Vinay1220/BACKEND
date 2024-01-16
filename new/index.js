const express = require('express')
const app = express();
const path = require('path');

// app.use(express.static(path.join(__dirname,"static")))

app.get('/search',(req,res)=>{
    console.log(req);
    res.send(`product = ${req.query.product} && ${req.query.color}`)
})

// app.get('/',(req,res)=>{
//     // console.log(__dirname);
//     // res.sendFile(path.join(__dirname + "/index.html"))
//     // res.send("hello");
//     res.send("hello world");

// })

// app.get('/app.js',(req,res)=>{
//     res.send("Ram")
// })

app.listen (2500,()=>{
    console.log(`server is running at port 2500`);
})