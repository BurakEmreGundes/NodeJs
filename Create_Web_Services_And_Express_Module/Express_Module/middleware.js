const { response } = require('express');
const express = require('express');
const app=express();
const morgan=require('morgan');


app.use(express.json());
app.use(express.static('public'));
app.use(morgan("tiny"));
//app.use(morgan("common"));



//1. GENEL ARA KATMAN 
app.use((req,res,next)=>{
    console.log("1. genel ara katmandayım");
    let isLogin=false;
    if(req.url=="/notlogin")
    isLogin=true; 

    if(isLogin)
    next();
    else
    res.send(`${req.url} middleware çalıştı.<br> Kullanıcı girişi yapılmadı.`);
});

//2. GENEL ARA KATMAN
app.use((req,res,next)=>{
    console.log("2. genel ara katmandayım");
    next();
})

//2. ÖZEL ARA KATMAN
app.use("/login2",(req,res,next)=>{
    let isLogin=false;
    if(isLogin)
    next();
    else
    res.send(`${req.url} middlewaree çalıştı.<br> Kullanıcı girişi yapılmadı. (login2)`);
});

//2. ÖZEL ARA KATMAN
app.use("/notlogin",(req,res,next)=>{
   next();
});


app.get("/login",(req,res)=>{
    res.send("anasayfa");
});
app.get("/login2",(req,res)=>{
    res.send("anasayfa2");
});
app.get('/notlogin',(req,res)=>{
    res.send("you don't have login. This is customer page");
});




app.listen(3000,()=>{
    console.log("Server 3000 portunu dinliyor...");
});