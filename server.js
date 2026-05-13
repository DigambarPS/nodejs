const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const webForm = require("./webform")
const formSubmit = require("./formsubmit")

//creation of a simple server using http module
// http.createServer((req, resp)=>{
//     resp.write('<h1>hello</h1>');
//     resp.end();
// }).listen(3000);

//simpleAPI
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
// ];
// http.createServer((req,res)=>{
//     res.setHeader('Content-Type','application/json')
//     res.write(JSON.stringify(userData))
//     res.end()
// }).listen(3000);
//end

//accessing data from cmd
// const data = process.argv;
// http.createServer((req,res)=>{
//     console.log(data)
// }).listen(3000)
//end

//accessing request data
// http.createServer((req,res)=>{
//     console.log(req.url)
// }).listen(3000)
//end

//showing a html page in response
// http.createServer((req,res)=>{
//     fs.readFile('web.html','utf-8',(err,data)=>{
//         if(err){
//             res.writeHead(500,{"Content-Type":'text/plain'})
//             res.write('Internal Server Error')
//             res.end()
//             return
//         }
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(3000)
//end

//submitting form using js
// http.createServer((req,res)=>{
//     if(req.url == '/'){
//         res.write(`
//         <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Web Page from HTML</h1>
//     <form method="POST" action="/submit">
//     <input type="text" name="username" id="username">
//     <input type="text" name="pass" id="pass">
//     <input type="submit" value="Submit">
//     </form>
//     </body>
// </html>
//         `)
//     }else if(req.url == '/submit')
//     {
//         res.write('<h1>Data Submitted Successfully</h1><a href="/">Click here to go to form again</a>')
//     }

//     res.end()
// }).listen(3000)
//end

//submitting form using external html file
// http
//   .createServer((req, res) => {
//     fs.readFile("form.html", "utf-8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Internal Server Error");
//         res.end();
//         return;
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });

//       if (req.url == "/") {
//         res.write(data);
//       } else if (req.url == "/submit") {
//         res.write(
//           '<h1>Data Submitted Successfully</h1><a href="/">Click here to go to form again</a>',
//         );
//       }
//       res.end();
//     });
//   })
//   .listen(3000);
//end

//fetching submitted form data processing and displaying
// http
//   .createServer((req, res) => {
//     fs.readFile("form.html", "utf-8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.write("Internal Server Error");
//         res.end();
//         return;
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });

//       if (req.url == "/") {
//         res.write(data);
//       } else if (req.url == "/submit") {
//         let receivedData = [];
//         req.on("data", (chunk) => {
//           receivedData.push(chunk);
//         });
//         let readableData = "";
//         req.on("end", () => {
//           let rawData = Buffer.concat(receivedData).toString();
//           readableData = qs.parse(rawData);
//           // console.log(readableData)

//           res.write(
//             `<h1>Data Submitted Successfully</h1>
//           <h3>Submitted Data</h3>
//           <div>Username - ${readableData.username} </div>
//           <div>Password - ${readableData.pass} </div>
//           <a href="/">Click here to go to form again</a>`,
//           );
//           res.end();
//         });
//       }
//     });
//   })
//   .listen(3000);
//end

//routes and modules from external files
    http.createServer((req, res)=>{
        if(req.url == '/'){
           webForm(req, res);
        }else if(req.url == '/submit'){
            formSubmit(req, res);
        }
        res.end()
    }).listen(3000)
//end