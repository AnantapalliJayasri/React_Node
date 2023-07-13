//importing the express server
const express = require("express")
//creating a express application
const app = express()
//using post method present in express
app.get("/post",(req,res) =>{
    res.send("hello")
})

/*const http = require("node:http");

//creating a server which accepts a callback function.Whenever the request reaches the server this fun gets automatically executed.
const server = http.createServer((request,response)=>{
    //successful response
    response.writeHead(200,"{content-Type: text/plain");
    //Ending the response.
    response.end("Hello world");
});*/
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));