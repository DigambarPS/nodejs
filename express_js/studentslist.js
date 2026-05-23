import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import { url } from "./connection.js";
const app = express();
const dbName = "school";
const client = new MongoClient(url);

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
app.use(express.json())
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

//show add form
app.get("/addStudent",(req,res)=>{
    res.render('addStudent')
})

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

  //save data using form in db
  app.post("/addStudent", async (req,res)=>{
    const result = await collection.insertOne(req.body)
    console.log(result)
    res.send('<h2>Data Submitted</h2><br/><a href="/addStudent">Submit Another</a>')
  })

  //save data in db using api
  app.post("/addStudentApi", async (req,res)=>{
    const {name,age,email} = req.body
    if(!name || !age || !email)
    {
        res.send({message:"Operation Failed"})
        return false
    }
    const result = await collection.insertOne(req.body)
    console.log(result)
    res.send({message:"Operation Successful"})
  })

  //delete data from db using api
  app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id
    if(!id)
    {
        res.send({message:"Operation Failed"})
        return false
    }
    const result = collection.deleteOne({_id: new ObjectId(id)})
    res.send({message:"operation Successful"})
  })

  //delete data from db from html table using anchor link
  app.get("/deleteStudent/:id",(req,res)=>{
    const id = req.params.id
    if(!id)
    {
        res.send('<h2>Something Went Wrong!!</h2><br/><a href="/students">Go to List</a>')
        return false
    }
    const result = collection.deleteOne({_id: new ObjectId(id)})
    res.send('<h2>Student Deleted Successfully</h2><br/><a href="/students">Go to List</a>')
  })

  //get data of a student based on id and display in html form
  app.get('/student/:id',async (req,res)=>{
    const id = req.params.id
    if(!id)
    {
      res.send('<h2>Something went wrong</h2>')
      return false
    }
    const result = await collection.findOne({_id: new ObjectId(id)})
    res.render('updateStudent',{data:result})
  })

  //get data of student based on id using api
  app.get('/getStudent/:id',async (req,res)=>{
    const id = req.params.id
    if(!id)
    {
      res.send({message:"fetching data Unsuccessful"})
      return false
    }
    const result = await collection.findOne({_id: new ObjectId(id)})
    res.send({message:"fetching data Successful",result:result})
  })
});

app.listen(3200);
