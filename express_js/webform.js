const app = require('express')();

app.get("/",(req,res)=>{
    res.send('<h1> Welcome to Home Page <br> <a href="/login">Go to login</a></h1>')
})

app.get("/login",(req,res)=>{
    res.send(`<form method="post" action="submit"><input type="text" placeholder="Enter Username"><input type="password" placeholder="Enter Password"><button>Submit</button></form>`)
})

app.post("/submit",(req,res)=>{
    res.send("Data Submitted")
})


app.listen(3200);