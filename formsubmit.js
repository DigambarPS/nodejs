const fs = require("fs");

const formSubmit = (req, res) => {
  let receivedData = [];
  req.on("data", (chunk) => {
    receivedData.push(chunk);
  });
  let readableData = "";
  req.on("end", () => {
    let rawData = Buffer.concat(receivedData).toString();
    readableData = qs.parse(rawData);
    // console.log(readableData)

    res.write(
      `<h1>Data Submitted Successfully</h1>
          <h3>Submitted Data</h3>
          <div>Username - ${readableData.username} </div>
          <div>Password - ${readableData.pass} </div>
          <a href="/">Click here to go to form again</a>`,
    );
    res.end();
  });
};
module.exports = formSubmit;
