const express= require('express');
const router= express.Router();
const URL = require("../models/url_model");
router.get("/",async(req,res)=>{
const urlList=await URL.find({})
    return res.render("home",{
        URLS:urlList
    });
})

module.exports=router;