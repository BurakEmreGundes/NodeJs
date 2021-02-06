const { response } = require('express');
const express = require('express');
const router=express.Router();
const getUser=require("../data/user");



router.get("/", async (req,res)=>{
    const users = await getUser("/users");
    res.send(users);
    
});


module.exports=router;