const express = require('express');
const router = express.Router();
const Maestro = require('../models/maestro');

// Crear Maestro
router.post('/maestro', (req, res, next) => {
  var maestro = new Maestro(req.body);
  maestro.save(function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.json(resource).status(201);
    }
    });
});

router.get('/maestrosAll/:tipo',function(req,res){
   var tipo = req.params.tipo;
  Maestro.find({tipo:tipo},function(err,resource){
    if(err){
      res.send(err).status(404);
    } else {
      res.send(resource).status(200);
    }
  });
});

// Delete Maestro
router.delete('/maestrosDel/:id', (req, res,next) => {
  var id = req.params.id;
  Maestro.remove({_id:id}, function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.send(resource).status(201);
    }
  })
})

router.get('/maestroCod/:cod', function(req,res) {
  const cod=req.params.cod;
  Maestro.getMaestroByCod(cod,function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.json(resource).status(201);
    }
    })
})

router.get('/maestro/:id', function(req,res) {
  var id=req.params.id;
  Maestro.findById(id,function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.json(resource).status(201);
    }
    })
})

router.put('/maestro', function(req,res,next) {
  var maestro = new Maestro(req.body);
  var id=maestro._id;
  maestro.updated_at=new Date()
  Maestro.updateOne({_id:id},maestro, function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.json(resource).status(201);
    }
    });
})

module.exports = router;