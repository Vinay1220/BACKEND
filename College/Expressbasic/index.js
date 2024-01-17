const express = require('express')
const app = express();
const port = 4000;

app.get("/", (req, res)=>{
    res.send("vinay")
})

app.get('/greet',(req,res)=>{
    res.send(`Hello gud morning`);
})

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);
})