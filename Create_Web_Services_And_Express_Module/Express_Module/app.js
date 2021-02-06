const express=require("express");
const app=express();
const Joi = require('@hapi/joi');
const kullanıcılar=[
    {id:1,ad:'emre',yas:32},
    {id:2,ad:'burak',yas:19},
]

app.use(express.json());
app.use(express.static('public'));

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
    
    
    const schema=Joi.object({
        id:Joi.number().integer().required(),
        ad:Joi.string().min(3).max(30).required(),
        yas:Joi.number().integer().min(10).max(90).required()
    });
  const sonuc=schema.validate(req.body);
if(!sonuc.error){
    const yeniKullanici={
        id:req.body.id,
        ad:req.body.ad,
        yas:req.body.yas
    }
    kullanıcılar.push(yeniKullanici);
    res.send(yeniKullanici);
}else{
    res.status(400).send(sonuc.error);
}
    

});

/*app.get('/users/:yas',(req,res)=>{
   console.log("sea");
    const kullanici=kullanıcılar.filter((kullanici)=>{
        return kullanici.yas<req.params.yas
    });
    console.log(kullanici)
    //res.send(kullanici);
});*/
app.put('/users/:id',(req,res)=>{
   const bulunankullanici=kullanıcılar.find(user=>{
       return parseInt(req.params.id)===user.id;
   });
   if(!bulunankullanici){
       res.status(404).send(`${req.params.id}'li kullanıcı bulunamadı !`);
    }
    else{
        const schema=Joi.object({
            ad:Joi.string().min(3).max(30).required(),
            yas:Joi.number().integer().min(10).max(90).required()
        });
      const sonuc=schema.validate(req.body);
      if(!sonuc.error){
       bulunankullanici.ad=req.body.ad;
       bulunankullanici.yas=parseInt(req.body.yas);
    
        res.send(bulunankullanici);
    }else{
        res.status(400).send(sonuc.error);
    }
    }
    });

app.delete("/users/:id",(req,res)=>{
    const silinecekkullanici=kullanıcılar.find((user)=>{
        return user.id===parseInt(req.params.id);
    });
    if(silinecekkullanici){
      const index=kullanıcılar.indexOf(silinecekkullanici);
      kullanıcılar.splice(index,1);
      res.send(silinecekkullanici);
    }else{
        res.status(404).send(`${req.params.id}'li kullanıcı bulunamadı !`);
    }

})

app.listen(3000,()=>{
    console.log("Server 3000 portunu dinliyor...");
});