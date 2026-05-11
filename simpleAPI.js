const http = require('https');

// const userData = [
//     {
//         "name":"pida",
//         "age":21,
//         "email":"pida@test.com"
//     },
//     {
//         "name":"varun",
//         "age":28,
//         "email":"varun@test.com"
//     },
//     {
//         "name":"navin",
//         "age":25,
//         "email":"navin@test.com"
//     }
// ]

http.createServer((req,res)=>{
    // res.setHeader('Content-Type','application/json')
    res.write('JSON.stringify({})')
    res.end()
}).listen(2001);