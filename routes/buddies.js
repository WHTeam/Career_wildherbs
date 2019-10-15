const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Buddy = require('../models/buddy');

router.post('/test', (req, res, next) =>{
    let newBuddy = new Buddy({
        name:req.body.name,
        email: req.body.email,
        nickname: req.body.nickname,
        number: req.body.number
    })
 

Buddy.addBuddy(newBuddy, (err, buddy) => {
    if(err){
        res.json({
            success: falsce, msg:'Failed to add Buddy'
        })
    }else {
        res.json({success:true, msg:'Buddy Entered'});
    }
});
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
  });
  
  // Profile
  router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
  });
  

module.exports= router;