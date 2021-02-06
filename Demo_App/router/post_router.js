const express = require('express');
const router=express.Router();
const postDataModule=require("../data/post");

router.get("/",async (req,res)=>{
    const posts= await postDataModule.getPosts();
    res.send(posts);
});


/*router.post("/",async(req,res)=>{
    console.log("body: "+req);
    console.log("sea");
    const post=await postDataModule.postPost(req);
    res.send(post);
});*/

module.exports=router;