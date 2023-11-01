//modules
//1.local module(function write and use any were) 2.core module(inbuild) 3.thirdparty module(install using npm)
//local modules
const global = require("./One");
global.myFunc();
console.log(global.x);

//core modules
const readline = require("readline");
const events = require("events");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
const url = new URL("http://www.google.com");
const http = require("http");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("what is your name", (ans) => {
//   if (ans === "karthi") {
//     rl.close();
//   } else {
//     rl.setPrompt("wroung name");
//   }
// });

//******crypto************//
// let hash = crypto.createHmac('sha256','ihhuuhuh').update('i love node').digest('hex')

//task
// rl.question('enter your name',(data)=>{
//     let hashName = crypto.createHmac('sha256','ihhuuhuh').update(data
//     ).digest('hex')
//     console.log(hashName);
// })

//**********events**************//
// const myEmitter = new events.EventEmitter();
// myEmitter.addListener("my", () => {
//   console.log("emitter");
// });

// myEmitter.emit("my"); // calling event

//********path****** */
// console.log(path.basename(__filename)); // file name
// console.log(path.extname(__filename));

// console.log(path.join(`${__dirname}/index/index.js`));

//*********filesystem******/

//creating folder
// fs.mkdir("optic", (err) => {
//   if (err) {
//     console.log("Dir not created");
//   } else {
//     console.log("Dir created");
//   }
// });

// creating file and text inside file which is inside a folder
// fs.writeFile(path.join(`${__dirname}/optic/optic.js`), "i love node", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//reading file content
// fs.readFile(path.join(`${__dirname}/optic/optic.js`), "utf-8", (err, data) => {
//   console.log(data);
// });

//rename file name
// fs.rename(
//   path.join(`${__dirname}/optic/optic.js`),
//   path.join(`${__dirname}/optic/optic1.js`),
//   (err) => {
//     console.log(err);
//   }
// );

//**********url****** */
// console.log(url.href);
// console.log(url.pathname);
// console.log(url.origin);
// console.log(url.host);
// console.log(url.protocol);

//*********http(creating port) ******/
const app = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(`${__dirname}/optic/Home.html`),
      "utf8",
      (err, data) => {
        res.end(data);
      }
    );
  }
  if (req.url === "/edit") {
    fs.readFile(
      path.join(`${__dirname}/optic/Edit.html`),
      "utf8",
      (err, data) => {
        res.end(data);
      }
    );
  }
  if (req.url === "/config") {
    let x = [{ id: 1, name: "karthi" }];
    res.end(JSON.stringify(x));
  }
});

app.listen(2500, () => {
  console.log("server started on 2500");
});
