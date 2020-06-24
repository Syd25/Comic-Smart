const express=require('express');
const app=express();
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'));
app.use('jquery',express.static(__dirname+'node_modules/jquery/dist'));

app.get("/",(req,res)=>{
      res.sendFile(__dirname+'/intro.html')
});

app.get("/index",(req,res)=>{
      res.sendFile(__dirname+'/index.html')
});

app.get("/speech",(req,res)=>{
      res.sendFile(__dirname+'/speech.html')
});

app.listen(3000,()=>console.log("Server running on localhost:3000"));