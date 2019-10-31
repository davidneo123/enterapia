const express = require('express');
const router = express.Router();
const Date1 = require('../models/date');
var mongoose = require('mongoose');

router.post('/date', (req, res, next) => {
  var date = new Date1(req.body);
  var userid = mongoose.Types.ObjectId(date.user);
  var patientid = mongoose.Types.ObjectId(date.pac);
  date.user= userid
  date.patient= patientid
  console.log(date)
  date.save(function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.json(resource).status(201);
    }
    })
})

router.get('/dates/:user',function(req,res){
   var user = req.params.user;
  Date1.find({user:user},function(err,resource){
    if(err){
      res.send(err).status(404);
    } else {
      res.send(resource).status(200);
    }
  })
})

router.get('/datesNota/:pac',function(req,res){
  var pac = req.params.pac;
 Date1.find({pac:pac},function(err,resource){
   if(err){
     res.send(err).status(404);
   } else {
     res.send(resource).status(200);
   }
 })
})

router.get('/date/:id', function(req,res) {
  var id=req.params.id;
  Date1.findById(id,function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.json(resource).status(201);
    }
    })
})

router.delete('/dateDel/:id', (req, res,next) => {
  var id = req.params.id;
  Date1.remove({_id:id}, function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.send(resource).status(201);
    }
  })
})

router.put('/date', function(req, res, next) {
  var date = new Date1(req.body);
  var id = date._id;
  var nota = mongoose.Types.ObjectId(date.nota);
  var pac = mongoose.Types.ObjectId(date.pac);  
  date.updated_at=new Date()
  Date1.updateOne({ _id: id }, date, function(err, resource) {
      if (err) {
          return res.send(err).status(501);
      } else {
          res.json(resource).status(201);
      }
  });
})

module.exports = router;