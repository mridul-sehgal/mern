// const http = require("http");
// const fs = require("fs");
// //used to parse the url 
// const url = require("url")

const express= require("express");
const app=express()

app.get("/",(req,res)=>{
  return res.send("Konichiwa, Watashi wa Home Page desu")
})

app.get("/about", (req,res)=>{
  return res.send("Konichiwa, Watashi wa About Page desu")
})

app.listen(8000,()=> console.log("Server has started on the given port number"))











// create server function is used to create a http server for us
// it takes a callback function as argument called REQUEST LISTENER
// this function has two arguments

// 1) req:- contains all the information of the request made
// 2) res:- it is the response given by the server

//******************************************** */

// const myServer =http.createServer((req,res)=>{
//     console.log("New Server request")
//     res.end("Hello From Server")
// });

//******************************************** */





//******************************************** */

// function myHandler(req,res){
//   {
//     const log = `${Date.now().toString()} ${req.url} : New Request Received \n`;
//     const myUrl=url.parse(req.url)
//     console.log(myUrl)
//     fs.appendFile("log.txt", log, (err, data) => {
//       switch(req.url)
//       {
//           case '/':res.end("Hello From Server Home Page");
//           break;
//           case "/about":res.end("I am Mridul and I am Learning Backend")
//           break;
//           default : "404 Page Not Found"
//           break
//       }
      
//     });
//   }
// }

// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("Server Started Successfully"));

//******************************************** */


// .listen function is used to listen for request made to the server
// this function takes a port number as the agument on which the server should listen/run
// an optional call back function can also be passed to check proper functioning of the server

