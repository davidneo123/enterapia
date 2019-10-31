const express = require('express');
const router = express.Router();
const Historia = require('../models/historia');
var mongoose = require('mongoose');

// Crear Historia
router.post('/nota', (req, res, next) => {
    console.log(req.body)    
    var historia = new Historia(req.body);
    console.log(historia)    
    var userid = mongoose.Types.ObjectId(historia.user);
    var patientid = mongoose.Types.ObjectId(historia.pac);
    historia.user= userid
    historia.pac= patientid
   /// historia.motivo=String(historia.motivo)
    console.log(historia)
    historia.save(function(err, resource) {
        if (err) {
            return res.send(err).status(501);
        } else {
            res.json(resource).status(201);
        }
    })
})

router.put('/nota', function(req, res, next) {
    console.log(req.body)  
    var historia = new Historia(req.body);
    console.log(historia)
    var id = historia._id;
    historia.updated_at=new Date()
    Historia.updateOne({ _id: id }, historia, function(err, resource) {
        if (err) {
            return res.send(err).status(501);
        } else {
            res.json(resource).status(201);
        }
    });
})

router.get('/notas/:id', function(req, res) {
    var id = req.params.id;
    Historia.find({ pac: id }, function(err, resource) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.send(resource).status(200);
        }
    })
})

// Delete Historia
/* router.delete('/historiasDel/:id', (req, res, next) => {
    var id = req.params.id;
    Historia.remove({ _id: id }, function(err, resource) {
        if (err) {
            return res.send(err).status(501);
        } else {
            res.send(resource).status(201);
        }
    })
}) */

router.get('/nota/:id', function(req, res) {
    var id = req.params.id;
    Historia.findById(id, function(err, resource) {
        if (err) {
            return res.send(err).status(501);
        } else {
            res.json(resource).status(201);
        }
    })
})

module.exports = router;