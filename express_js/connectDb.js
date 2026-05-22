import express from "express"
import {MongoClient} from "mongodb"
const app = express()

const dbName = "school";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);


async function dbConnection()
{
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('students')

    const res = await collection.find().toArray();
    return res
}

const data = await dbConnection();
console.log(data)
app.listen(3200)