import express from "express"
import multer from "multer"
const app = express()

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'upload')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage})
app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get("/upload",(req,res)=>{
    res.send("<form method='post' action='/uploadFile' enctype='multipart/form-data'><input type='file' name='file'><button>Upload</button></form>")
})

app.post("/uploadFile",upload.single('file'),(req,res)=>{
    res.send("<h1>File Uploaded Successfully</h1>")
})

app.listen(3200)