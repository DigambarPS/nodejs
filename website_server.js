const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    let file='/home';
    // console.log(req.url)
    if(req.url!='/')
    {
        file=req.url
    }
    
    const headerData = fs.readFileSync('./website/header.html','utf-8');
    const footerData = fs.readFileSync('./website/footer.html','utf-8');

    if(req.url!='/styles.css')
    {
    fs.readFile("./website"+file+".html",'utf-8',(err,data)=>{
        if(err)
        {
            res.writeHead(500,{"content-type":"text/plain"})
            res.write('internal Server Error');
            return
        }

        res.writeHead(200,{"content-type":"text/html"})
        res.write(headerData+data+footerData);
        res.end()
    })
    }else if(req.url == '/styles.css')
    {
        fs.readFile("./website/styles.css",'utf-8',(err,data)=>{
        if(err)
        {
            res.writeHead(500,{"content-type":"text/plain"})
            res.write('internal Server Error');
            return
        }

        res.writeHead(200,{"content-type":"text/css"})
        res.write(data);
        res.end()
    })
    }
}).listen(6600)