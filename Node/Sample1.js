const express = require("express")
const app = express()
app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())
app.post("/data",(req,res) =>{
    const val = {
        //here the name should be same as name input tag.
        name : req.body.username,
        password:req.body.password
    }
    res.send(val);

})

app.listen(8080,console.log("running in 8080"));