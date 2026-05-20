import express from "express"
const app = express();

app.get("/",(req,res)=>{
    const users = ['amay','pratik','chirag','ryan']
    let data = '<ul>'
    users.forEach(e => {
        data+='<li><a href="/users/'+e+'">'+e+'</a></li>'
    });
    data += '</ul>'
    res.send(data);
})

app.get('/users/:name', (req,res)=>{
    const name = req.params.name
    res.send('<h2>profile of user '+name+'</h2>')
})

app.listen(3200)