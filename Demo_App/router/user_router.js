const express = require('express');
const router=express.Router();
const userDataModule=require("../data/user");



//GET ALL USERS
router.get("/", async (req,res)=>{
    const users = await userDataModule.getUsers();
    res.send(users);
});


//GET ONE USER
router.get("/:id",async (req,res)=>{
    const user=await userDataModule.getOneUser(`${req.params.id}`);
    res.send(user);    
});


module.exports=router;