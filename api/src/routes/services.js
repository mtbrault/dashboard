// services.js

const express = require('express');
const router = express.Router();

const User = require('../models/Users');

router.post('/services/weather', function(req, res) {
    const email = req.body.email;

    User.findOne({email}).then(user => {
        console.log(user.service);
    });
}); 

module.exports = router;