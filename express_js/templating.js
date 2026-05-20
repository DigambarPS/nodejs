import express from "express"
const app = express();
//using ejs templating in express
app.set('view engine','ejs')

app.get("/",(req,res)=>{
    res.send("<h1>HOme pAge</h1>")
})

app.get("/getData",(req,res)=>{
    res.render('data',{name:"Pida", Age:22})
})

//showing data submitted from a form in template
app.use(express.urlencoded({extended:false}))
app.get("/submitUserData", (req,res)=>{
    res.render('userForm')
})

app.post("/submit",(req,res)=>{
    res.render('submitted', req.body)
})

//loop and if condition in template
app.get('/userList', (req,res)=>{
    const users = ['amar','aaron','manoj','pida']
    res.render('userList',{users:users, isLoggedIn:false})
})

app.listen(3200)