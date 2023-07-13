const express = require('express')
const app = express()
const file=require("node:fs")
app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())


//retreiving data from react form.
app.post("/retreivedata",(req,res) =>{
    const val = {
        name : req.body.username,
        password : req.body.password,
        email : req.body.email,
        role : req.body.role,
        gender : req.body.gender

    }
    let data = file.readFileSync("demo/src/BasicWebpage.js","utf-8");
    data = data.replace("{{name}}",val.name);
    if(val.name != '' && val.passsword != '' && val.email != '' && val.role != '' && val.gender != ''){
        res.send(val);
    }
    else{
        res.send("all the fields are required");
        //res.send(`all the fields are required ${val.name}`);
    }
    
});

app.listen(8080,() => {
    console.log("Server is running in port 8080")
})