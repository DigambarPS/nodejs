import express from "express"
import mongoose from "mongoose"
import {url} from "./connection.js"
import studentModel from "./model/studentModel.js"
const app = express()

await mongoose.connect(url+'/school').then()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send({})
})

//api using mongoose to get data
app.get("/students",async (req,res)=>{
    const studentData = await studentModel.find()
    res.send(studentData)
})

//api using mongoose to save data
app.post("/save",async (req,res)=>{
    const {name,age,email} = req.body
    if(!req.body || !name || !age || !email)
    {
        res.send({message:"Operation Failed",success:false})
        return false
    }
    const result = await studentModel.create(req.body)
    res.send({message:"Operation Successful",success:true,data:result})
})

//put api to update data using mongoose
app.put('/update/:id',async (req,res)=>{
    const id = req.params.id
    const data = await studentModel.findByIdAndUpdate(id,req.body)
    res.send({message:"Update successful",success:true, data:data})
})

//delete api to update data using mongoose
app.delete('/delete/:id',async (req,res)=>{
    const id = req.params.id
    const data = await studentModel.findByIdAndDelete(id)
    res.send({message:"Delete successful",success:true, data:data})
})
app.listen(3200)