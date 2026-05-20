import express from "express"
import userData from "./userData.json" with {type:"json"}
const app = express();

app.get("/",(req,res)=>{
    res.send(userData)
})

app.get('/user/:id', (req,res)=>{
    const id = req.params.id
    const data = userData.filter((e)=>e.id == id)
    res.send(data)
})

app.get('/username/:name', (req,res)=>{
    const name = req.params.name
    const data = userData.filter((e)=>e.name.toLowerCase() == name.toLowerCase())
    res.send(data)
})

app.listen(3200)