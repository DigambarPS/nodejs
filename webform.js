const fs = require('fs')

const webForm = (req,res)=>{
    fs.readFile("form.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Internal Server Error");
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" })
      res.write(data)
    });
}
module.exports = webForm