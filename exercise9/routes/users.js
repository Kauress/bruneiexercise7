const express  = require("express");
const router = express.Router();

router.post("/dashboard",function(req,res){
    res.render("dashboard", {username: req.body.username});
})

module.exports = router;