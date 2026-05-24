import express from "express"
import mongoose from "mongoose"
import {url} from "./connection.js"
import studentModel from "./model/studentModel.js"
const app = express()

await mongoose.connect(url+'/school').then()

app.get("/",(req,res)=>{
    res.send({})
})

//api using mongoose to get data
app.get("/students",async (req,res)=>{
    const studentData = await studentModel.find()
    res.send(studentData)
})
app.listen(3200)