import express from "express"
import session from "express-session"

const app = express()

app.use(session({
    secret:"apple"
}))

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.get("/login",(req,res)=>{
    res.render('login')
})

app.get('/profile',(req,res)=>{
    const sessionData = req.session.data
    res.render('profile',{name:sessionData.username})
})

app.post('/Profile', (req,res)=>{
    req.session.data = req.body
    res.render('home')
})

app.listen(3200)