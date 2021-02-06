const express = require('express');
const app=express();


const userRouter=require("./router/user_router");


app.use("/users",userRouter);



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server Has Started port: ${port}`);
});


