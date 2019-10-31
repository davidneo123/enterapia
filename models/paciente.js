const mongoose = require('mongoose');
const config = require('../config/database');

// Paciente Schema
const PacienteSchema = mongoose.Schema({

    id: {
        type: String
    },
    tip: {
        type: String
    },
    nombres: {
        type: String
    },
    apellido1: {
        type: String
    },
    apellido2: {
        type: String
    },
    genero: {
        type: String
            //required: true
    },
    fechanac: {
        type: Date
    },
    estado: {
        type: String
            //required: true
    },
    ciudad: {
        type: String
            //required: true
    },
    localidad: {
        type: String
    },
    barrio: {
        type: String
    },
    direccion: {
        type: String
    },
    telefono: {
        type: String
    },
    email: {
        type: String
            //required: true
    },
    aseguradora: {
        type: String
            //required: true
    },
    vinculacion: {
        type: String
            //required: true
    },
    ocupacion: {
        type: String
            //required: true
    },
    responsable: {
        type: String
            //required: true
    },
    telresponsable: {
        type: String
            //required: true
    },
    parentescoresponsable: {
        type: String
            //required: true
    },  act:{
        type:Boolean
      },
      created_at: {
        type: Date
      },
      updated_at: {
        type: Date,
        default: Date.now
      },
      offset: {
          type: String
      }
    })
//     act: {
//         type: Boolean
//     },
//     fec: {
//         type: Date,
//         //default: Date.now
//     },
//     fem: {
//         type: Date,
//         //default: Date.now
//     },
//     offset: {
//         type: String
//     }
// }, { timestamps: true })

// Sets the created_at parameter equal to the current time
PacienteSchema.pre('save', function(next){
    now = new Date()
    same=this
    same.updated_at = now
    if ( !same.created_at ) {
      same.created_at = now;
      same.offset= now.getTimezoneOffset() 
   }
    next()
   }); 

// PacienteSchema.pre('save', function(next) {
//     now = new Date();
//     this.fem = now.now;
//     offset: now.getTimezoneOffset()
//     if (!this.fec) {
//         this.fec = now.now;
//         offset: now.getTimezoneOffset()
//     }
//     next();
// });

const Paciente = module.exports = mongoose.model('Paciente', PacienteSchema);

module.exports.getPacienteById = function(id, resource) {
    Paciente.findById(id, resource);
}

module.exports.getPacienteByDoc = function(doc, resource){
  const query = {id: doc}
  Paciente.findOne(query, resource);
}


/*module.exports.addPaciente = function(newPaciente, callback){
    newPaciente.save(newPaciente, function(err,resource){
    if(err) throw err;
    callback(null, resource);
    } )
}*/

module.exports.editPaciente = function(newPaciente, callback) {
    var id = newPaciente._id;
    this.getPacienteById(id, (err, paciente) => {
        if (err) throw err;
        Paciente.updateOne({ _id: id }, newPaciente, function(err, resource) {
            callback(null, resource);
        })
    })
}