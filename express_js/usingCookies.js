import express from "express"
const app = express()
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.render('home')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/profile',(req,res)=>{
    const name = req.body.username
    res.setHeader('Set-Cookie','name='+name)
    res.render('home')
})

app.get('/profile',(req,res)=>{
   let cookieData = req.get('Cookie')
    const name = cookieData.split(';')[1].split('=')[1];
    res.render('profile',{name:name})
})

app.listen(3200)