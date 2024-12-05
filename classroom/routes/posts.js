const express = require("express");
const router=express.Router();


//POSTS
//Index-POSTS
router.get("/",(req,res)=>{
    res.send("GET for posts");
});

//Show - POSTS
router.get("/:id",(req,res)=>{
    res.send("GET for show posts");
});

//post-POSTS
router.post("/",(req,res)=>{
    res.send("POST for post id");
});

//DELETE-POSTS
router.delete("/:id",(req,res)=>{
    res.send("DELETE for post id");
});

module.exports=router;