const express = require ("express");
const { dirname } = require("path");
const app = express();

app.use(express.static(__dirname));

app.get("/", function(req,req){
    res.sendFile(__dirname + "index.html")
})

app.listen(8080,function(){
    console.log("aplikasi berjalan di port 8080")
})