const express= require('express');
const {generateNewShortUrl,getAnalytics} = require("../controllers/url_controller")
const router= express.Router();

router.post("/",generateNewShortUrl);
router.post("/analytics/:shortId",getAnalytics)
module.exports=router;