const express = require("express");

const app = express()

const cors = require("cors");

app.use(cors());



app.listen(4000,()=>{
    console.log("app is running")
});

app.get("/getData",(req,res)=>{
    res.send("hi,world")
});