const express = require('express');
const app=express();
const keys=require('./data/key');

const userRouter=require("./router/user_router");
const postRouter=require("./router/post_router");
const data = require('./data/key');


app.use((req,res,next)=>{
    if(req.headers.mykey==data.authKey)
    next();
    else
    res.status(404).send({
        statusMessage:"Auth Key is not true !"
    })
});
app.use("/users",userRouter);
app.use("/posts",postRouter);



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server Has Started port: ${port}`);
});


