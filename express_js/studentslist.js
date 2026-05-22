import express from "express";
import { MongoClient } from "mongodb";
import { url } from "./connection.js";
const app = express();
const dbName = "school";
const client = new MongoClient(url);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home");
});

// app.get('/students',async (req,res)=>{
//     await client.connect()
//     const db = client.db(dbName)
//     const collection = db.collection('students')
//     const data = await collection.find().toArray()
//     res.render('studentslist',{"data":data})
// })

//another way
client.connect().then((connection) => {
  const db = connection.db(dbName);
  const collection = db.collection("students");
    
  app.get("/students", async (req, res) => {
    const data = await collection.find().toArray();
    res.render("studentslist", { data: data });
  });

  app.get("/students_api", async (req, res) => {
    const data = await collection.find().toArray();
    res.send(data);
  });
});

app.listen(3200);
