const express = require('express');
const app = express();
const path = require('path');
app.use(express.static("public"));
app.listen(3040,console.log("Esta corriendo en el puerto 3040"));
app.get("/",function(req,res){
    res.sendFile((path.join(__dirname,'/views','/index.html')))})