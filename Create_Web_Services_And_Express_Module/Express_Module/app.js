const { response } = require("express");
const express=require("express");
const app=express();

const kullanıcılar=[
    {id:1,ad:'emre',yas:32},
    {id:2,ad:'burak',yas:19},
]

app.use(express.json());

app.get('/',(req,res)=>{
    console.log("ana sayfaya girildi.");
    res.send("<h1 style='color:red'>Hello, welcome to my home page.</h1>")
});

app.get("/users",(req,res)=>{
    if(req.query.ters){
        res.send(kullanıcılar.reverse());
    }else{
        res.send(kullanıcılar);
    }
 console.log("kullanıcılar sayfasına girildi.");

});

app.get('/users/:id',(req,res)=>{
    console.log(req.params.id);
    const kullanici=kullanıcılar.find((kullanici)=>{
        return kullanici.id===parseInt(req.params.id)
    });
    if(kullanici){
        res.send(kullanici);
    }else {
        res.status(404).send( {
            error:"not found",
            message:req.params.id+"'li user not found"
        });
    }
   
});

app.post('/users',(req,res)=>{

    const yeniKullanici={
        id:req.body.id,
        ad:req.body.ad,
        yas:req.body.yas
    }
    kullanıcılar.push(yeniKullanici);
    res.send(yeniKullanici);

});

/*app.get('/users/:yas',(req,res)=>{
   console.log("sea");
    const kullanici=kullanıcılar.filter((kullanici)=>{
        return kullanici.yas<req.params.yas
    });
    console.log(kullanici)
    //res.send(kullanici);
});*/


app.listen(3000,()=>{
    console.log("Server 3000 portunu dinliyor...");
});