const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname,"static")))
app.use(express.urlencoded({extended:true}))
const PORT = 2000;

app.get('/information',(req,res) =>{
    console.log(req);
    res.send(`username:${req.query.username} password:${req.query.password}`)
})

app.post('/information',(req,res) =>{
    console.log(req.body);
    res.send("data send successfully")
})

app.listen(PORT,() =>{
    console.log(`Server is working at ${PORT}`);
})

