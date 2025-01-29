/*
create a server
Intialize the repo
node_modules , package.json , package-lock.json
Install express
Create a server
Listen to port 7777
Write request handlers for /hello and /test
Install nodemon nad update scripts  inside package.json
What are dependencies?
What is use of "-g" while npm install
D/B caret and tilde in express verison
*/
const express = require("express");

const app = express();

// app.use("/" , (req , res)=>{
//     res.send("Server Established");
// })

app.use("/hello" , (req , res)=>{
    res.send("Hello ");
})

app.use("/test" , (req , res)=>{
    res.send("Test Server");
})

app.listen(7777 , ()=>{
    console.log("Launched successfully");
});