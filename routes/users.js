'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User(req.body/*{
    id:req.body.id,
    tip:req.body.tip,
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    psico:req.body.psico,
    admon:req.body.admon,
    super:req.body.super,
    act: req.body.act
  }*/);

  //let newUser=req.body.user;
  newUser.roles[0]=req.body.super||false
  newUser.roles[1]=req.body.psico||false
  newUser.roles[2]=req.body.admon||false
  console.log(newUser)
  User.addUser(newUser, (err, user) => {
    if(err){
     res.json({success: false, msg:'Fallo al registrar al usuario'});
    } else {
      res.json({success: true, msg:'Usuario registrado'});
    /* return res.send(err).status(501);
    } else{
     return res.status(201);*/
    }
  });
});

router.put('/user', function(req,res,next) {
    let newUser = new User(req.body)/*{
    _id:req.body._id,
    id:req.body.id,
    tip:req.body.tip,
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
   psico:req.body.psico,
    admon:req.body.admon,
    super:req.body.super,
    act: req.body.act
  }*/
  //var newUser = new User(req.body);
   //let newUser=req.body.user;
  //var id=newUser._id;
  newUser.updated_at=new Date()
  newUser.roles[0]=req.body.super||false
  newUser.roles[1]=req.body.psico||false
  newUser.roles[2]=req.body.admon||false
  User.editUser(newUser, function(err,user){
    if(err){
    res.json({success: false, msg:'Fallo al actualizar al usuario'});
    } else {
      res.json({success: true, msg:'Usuario actualizado'});
    }
    });
})

router.get('/register/:id', function(req,res) {
  const id=req.params.id;
  User.getUserById(id,function(err,resource){
    if(err){
     return res.send(err).status(404);
    } else{
      res.json(resource).status(200);
    }
    })
})

router.get('/users/',function(req,res){
   //var tipo = req.params.tipo;
  //Maestro.find({tipo:tipo},function(err,resource){
    User.find(function(err,resource){
    if(err){
      res.send(err).status(404);
    } else {
      res.send(resource).status(200);
    }
  });
});

// Delete Maestro
router.delete('/UsersDel/:id', (req, res,next) => {
  var id = req.params.id;
  User.remove({_id:id}, function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.send(resource).status(201);
    }
  })
})

router.get('/user/:username', function(req,res) {
  const username=req.params.username;
  User.getUserByUsername(username,function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.json(resource).status(201);
    }
    })
})

router.get('/userDoc/:userid', function(req,res) {
  const userid=req.params.userid;
  User.getUserByDoc(userid,function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.json(resource).status(201);
    }
    })
})


// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'Usuario no encontrado'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            _id: user._id,
            id: user.id,
            tip: user.tip,
            name: user.name,
            username: user.username,
            email: user.email,
            roles:{sico:user.sico,
              admon:user.admon,
              super:user.super
            },
            act: user.act
          }
        });
      } else {
        return res.json({success: false, msg: 'Password incorrecto'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
