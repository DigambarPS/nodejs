// const app = require('express')() //commonjs way of importing
import express from "express"
const app = express()
import Home from './pages/home.js'
import Login from './pages/login.js'
import Submit from './pages/submit.js'
import path from "path"
const absPath = path.resolve('./view')
const publicPath = path.resolve('./public')
import morgan from "morgan";

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

/* simple web form in express js using modules and functions 
app.get("/", (req,res)=>{
    res.send(Home())
})

app.get("/login", (req,res)=>{
    res.send(Login())
})

app.post("/submit", (req,res)=>{
    res.send(Submit())
})
*/

/* sending a html file
app.get("/", (req, res)=>{
    //const filepath = path.resolve('./view/home.html') //used to find absolute path of file using relative path
    res.sendFile(absPath+'/home.html'); //requires absolute path of file to be rendered
})
 */

/* working with external css files */
app.use(
    express.static(publicPath)
)

/* simple middleware */
function checkRoute(req,res,next)
{
    if(req.url == "/" || '/users')
    console.log('checkRouteMiddleware')
    next();
}
// app.use(checkRoute)

function checkAge(req,res,next)
{
    if(req.query.age >= 18)
        next()
    else
        res.send("<h2>Access Denied</h>")
}

// app.use(checkAge)

app.get("/", (req,res)=>{
    res.sendFile(absPath+'/home.html');
})

app.get("/user",checkRoute,checkAge, (req,res)=>{
    res.sendFile(absPath+'/user.html');
})



//example for built in middleware
//express.static is also a built in middleware which helps to add css files
app.use(express.urlencoded({extended:false}))
app.get("/login", (req,res)=>{
    res.send(`
        <form method="POST" action="/submit">
        <input type="email" placeholder="Enter Email" name="email">
        <input type="password" placeholder="Enter password" name="password">
        <button>Submit</button>
        </form>`)
})

app.post("/submit",(req,res)=>{
    console.log(req.body)
    res.send1("<h2>Data Submitted</h2>")
})


//example for external middleware
app.use(morgan('dev'))


//example for error handling middleware
app.get("/error",(req,res,next)=>{
    let error = new Error('')
    error.status = 404;
    next(error)
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500).send("<h4>Try in some time</h4>")
})

/* add 404 page */
app.use((req,res)=>{
    res.status(404).sendFile(absPath+"/404.html");
})

app.listen(3200);