const express = require("express")
const file = require("node:fs")
const app = express()
app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())
app.post("/data",(req,res) =>{
    const val = {
        //here the name should be same as name input tag.
        name : "jayasri",
        password:"jaya"
    }
    res.writeHead(200,{"content-type" : "text/html"})
    let data = file.readFileSync("demo/src/App.js","utf-8");
    data = data.replace("{{username}}",val.name);
    res.end(data);
})

app.listen(8080,console.log("running in 8080"));