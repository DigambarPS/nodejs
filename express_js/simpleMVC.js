import express from "express"
import { handleUsers } from "./controller/usercontroller.js";
import { home } from "./controller/homecontroller.js";
const app = express();

app.set('view engine','ejs')

app.get("/",home)

app.get('/userList', handleUsers)

app.listen(3200)