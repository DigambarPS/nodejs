const fs = require("fs");

//to create a file in sync
// fs.writeFileSync('files/fruit.txt','I am a fruit');

//to remove a file in sync
// fs.unlinkSync('files/fruit.txt')

//to update a file in sync
// fs.appendFileSync('files/fruit.txt', 'I am a good fruit');

//to read file in sync
// const data = fs.readFileSync('files/fruit.txt', 'utf-8');
// console.log(data);

//file operations using command input
let operation = process.argv[2]
let filename = "files/" + process.argv[3] + ".txt"
let content = process.argv[4]
switch (operation) {
  case "write":
    fs.writeFileSync(filename, content);
    break;
  case "read":
    let data = fs.readFileSync(filename, "utf-8")
    console.log(data);
    break
  case "update":
    fs.appendFileSync(filename, content)
    break

  case "delete":
    fs.unlinkSync(filename)
    console.log("File deleted Successfully")
    break

  default:
    console.log("Invalid operation");
    break
}
