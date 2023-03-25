const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html",(err) => {
        console.log(err);
    });
});

router.post("/", (req,res) => {
    var data = req.body;
    data.age = 90;
    res.send(data);
});

module.exports = router;