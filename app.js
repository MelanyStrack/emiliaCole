const express = require("express");
const app = express();
const path = require("path");


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"))
}); 

app.get("/MUSIC",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/music.html"))
}); 

app.get("/CONTACT",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/contact.html"))
});

app.get("/ABOUT",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/about.html"))
}); 

app.use(express.static("public"));

app.listen(3000,()=>{
    console.log("Servidor ejecutandose en el puerto 3000");
});