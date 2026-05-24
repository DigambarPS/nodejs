import mongoose from "mongoose"
import {url} from "./connection.js"

async function dbConnection()
{
    await mongoose.connect(url+"/school")
    const schema = {
        name:String,
        age:Number,
        email:String
    }

    const studentModel = mongoose.model('students',schema)
    const result = await studentModel.find()
    
}

dbConnection();