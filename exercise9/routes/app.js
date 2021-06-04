const express = require("express");
const router = express.Router();

router.get("/",function(req, res){
res.render("index");
});

router.get("/contact", function(req,res){
    res.render("contact");
});

router.get("/students", function(req, res){
    res.render("students");
});

module.exports = router;