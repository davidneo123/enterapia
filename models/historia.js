const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const HistoriaSchema = new Schema({
    pac: {
        type: mongoose.Schema.Types.ObjectId
            // required:true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId
            // required:true
    },
    tipo: {
        type: String
    },
    nombreC: {
        type: String
    },
    nombreU: {
        type: String
    },
    motivo: {
        type: String
    },
    enfact: {
        type: String
            // required: true
    },
    antecedentes: {
        antper: String,
        antfam: String,
        antpat: String,
        antfar: String,
        psico: String,
        antrel: String
    },
    parientes: [{
        nombre: String,
        parentezco: String,
        edad: Number,
        ocupacion: String,
        satisfaccion: Number
    }],
    matrimonio: {
        nombre: String,
        ocupacion: String,
        edad: Number,
        entidad: String,
        escolaridad: String,
        relacion: String,
        convivencia: String,
        comunicacion: Number,
        responsabilidades: Number,
        manifestaciones: Number,
        relaciones: Number,
        actividades: Number,
        recreacion: Number,
        finanzas: Number,
        hijos: Number,
        familiares: Number,
        satisfaccion: Number
    },
    conviven: [{
        nombre: String,
        edad: Number,
        relacion: String
    }],
    importantes: [{
        nombre: String,
        edad: Number,
        relacion: String
    }],
    sociales: {
        frecuencia: Number,
        satisfaccion: Number,
        observaciones: String
    },
    colegios: [{
        edad: Number,
        fecha: Date,
        colegio: String,
        cursos: String
    }],
    universidades: [{
        edad: Number,
        fecha: Date,
        institucion: String,
        carrera: String
    }],
    desempeno: {
        general: Number,
        actual: Number,
        observaciones: String
    },
    trabajos: [{
        entidad: String,
        cargo: String,
        fecha: Date,
        retiro: String
    }],
    trabajo: {
        laboral: String,
        desarrollo: Number,
        remuneracion: Number,
        relaciones: Number,
        estres: Number,
        observaciones: String
    },
    aficiones: [{
        tipo: String,
        frecuencia: Number,
        satisfaccion: Number,
    }],
    aficionesanteriores: [{
        tipo: String,
        frecuencia: Number,
        satisfaccion: Number,
    }],
    aficionesfuturas: [{
        tipo: String,
        frecuencia: Number,
        satisfaccion: Number,
    }],
    satisfaccionaficiones: {
        type: Number
    },
    areasajuste: {
        respetar: String,
        tristeza: String,
        sexual: String,
        amistades: String,
        relaciones: String,
        temor: String,
        alcohol: String,
        tratamiento: String
    },
    impresion: {
        type: String
    },
    conducta: {
        type: String
    },
    pronostico: {
        type: String
    },
    evoluciones: [{
        fecha: Date, // type: Date },
        atencion: String,
        user: String
    }],
    act: {
        type: Boolean
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        // default: Date.now
    },
    offset: {
        type: String
    }
})

// Sets the created_at parameter equal to the current time
HistoriaSchema.pre('save', function(next) {
    console.log('en save')
    now = new Date()
        //same=this
    this.updated_at = now
        // if ( !same.created_at ) {
    this.created_at = now;
    this.offset = now.getTimezoneOffset()
        // }
    next()
});

const Historia = module.exports = mongoose.model('Historia', HistoriaSchema);