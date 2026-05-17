const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Express Js</h1>")
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Express Js - Contacts</h1>")
});

app.get("/about",(req,res)=>{
    res.send("<h1>Express Js - About</h1>")
});


app.listen(3500)
