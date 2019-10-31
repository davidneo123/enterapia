'use strict';

const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Paciente = require('../models/paciente');

// Register
router.post('/pacientenew', (req, res, next) => {
  var paciente = new Paciente(req.body);
  paciente.save(function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.json(resource).status(201);
    }
    });
});
/*
router.post('/pacientenew', (req, res, next) => {
  let newPaciente = new Paciente({
    id:req.body.id,
    tip:req.body.tip,
    name: req.body.name,
    email: req.body.email,
    genero: req.body.genero,
    estado: req.body.estado,
    ciudad:req.body.ciudad,
    act: req.body.act
  });

  //let newUser=req.body.user;

  Paciente.addPaciente(newPaciente, (err, paciente) => {
    if(err){
     res.json({success: false, msg:'Fallo al registrar al paciente'});
    } else {
      res.json({success: true, msg:'Paciente registrado'});
    
    }
  });
});*/

router.put('/paciente', function(req,res,next) {
  let newPaciente = new Paciente(req.body)
  newPaciente.updated_at=new Date()
  Paciente.editPaciente(newPaciente, function(err,paciente){
    if(err){
    res.json({success: false, msg:'Fallo al actualizar al paciente'});
    } else {
      res.json({success: true, msg:'Paciente actualizado'});
    }
    });
})

router.get('/paciente/:id', function(req,res) {
  const id=req.params.id;
  Paciente.getPacienteById(id,function(err,resource){
    if(err){
     return res.send(err).status(404);
    } else{
      res.json(resource).status(200);
    }
    })
})

router.get('/pacienteDoc/:doc', function(req,res) {
  const doc=req.params.doc;
  Paciente.getPacienteByDoc(doc,function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.json(resource).status(201);
    }
    })
//  console.log('servicio')
})

router.get('/pacientes/',function(req,res){
   //var tipo = req.params.tipo;
  //Maestro.find({tipo:tipo},function(err,resource){
    Paciente.find(function(err,resource){
    if(err){
      res.send(err).status(404);
    } else {
      res.send(resource).status(200);
      //console.log(resource)
    }
  });
});

// Delete Maestro
router.delete('/pacientesDel/:id', (req, res,next) => {
  var id = req.params.id;
  Paciente.remove({_id:id}, function(err,resource){
    if(err){
     return res.send(err).status(501);
    } else{
      res.send(resource).status(201);
    }
  })
})

module.exports = router;
