'use strict';

// 3d party dependencies
const express = require('express');
const router = express.Router();
const user = require('../models/user-model.js');


// sign up route that takes name and pass then save them at the DB .
router.post('/addnote' , add);
function add(req , res){
  console.log('req.body', req.body);
  return user.create(req.body)
    .then(data => {
      res.status(200).send(`Areose Kid !  ${data}`);
    });
}

// router to show all the DB objects (users)
router.get('/showall' , showMyUsers);
async function showMyUsers (req , res){
  let all = await user.read();
  console.log('in show router', all);
  res.status(200).json(all);
}


module.exports= router ;
  
  