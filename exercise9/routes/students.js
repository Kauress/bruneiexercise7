const express = require("express");
const router = express.Router();

router.post("/studentdashboard", function(req,res){
    res.render("studentdashboard", {studentId: req.body.studentId});
})



module.exports = router;