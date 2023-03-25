const express = require('express');
const router = express.Router();

router.get("/",(req,res) =>{
    const users = {
        username: "The Fitness Factory",
        phone: "9870654321",
    };
    res.send(users);
});

module.exports = router;