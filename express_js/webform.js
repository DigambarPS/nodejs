// const app = require('express')() //commonjs way of importing
import express from "express"
const app = express()
import Home from './pages/home.js'
import Login from './pages/login.js'
import Submit from './pages/submit.js'

/* simple webform flow using express js in same file
app.get("/",(req,res)=>{
    res.send('<h1> Welcome to Home Page <br> <a href="/login">Go to login</a></h1>')
})

app.get("/login",(req,res)=>{
    res.send(`<form method="post" action="submit"><input type="text" placeholder="Enter Username"><input type="password" placeholder="Enter Password"><button>Submit</button></form>`)
})

app.post("/submit",(req,res)=>{
    res.send("<h2>Data Submitted</h2>")
})>
*/

/* simple web form in express js using modules and functions */
app.get("/", (req,res)=>{
    res.send(Home())
})

app.get("/login", (req,res)=>{
    res.send(Login())
})

app.post("/submit", (req,res)=>{
    res.send(Submit())
})

app.listen(3200);