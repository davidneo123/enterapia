export interface Historia {
    pac?: String,
    user: String,
    tipo?:String,
    nombreU:String,
    motivo: String,
    enfact: String,
    antecedentes: [{
            antper: String,
            antfam: String,
            antpat: String,
            antfar: String,
            psico: String,
            antrel: String}],
    parientes: [{
            nombre: String,
            parentesco: String,
            edad: Number,
            ocupacion: String,
            satisfaccion: Number
        }],
    matrimonio: [{
            nombre: String,
            ocupacion: String,
            edad: Number,
            entidad: String,
            escolaridad: String,
            relacion: String,
            convivencia: String,
            satisfaccion: Number
        }],
    satisfaccion: [{
            comunicacion: Number,
            responsabilidades: Number,
            manifestaciones: Number,
            relaciones: Number,
            actividades: Number,
            recreacion: Number,
            finanzas: Number,
            hijos: Number,
            familiares: Number
        }],
    conviven: [{
            nombre: String,
            edad: String,
            relacion: String
        }],
    importantes: [{
            nombre: String,
            edad: String,
            relacion: String
        }],
    sociales: [{
            frecuencia: Number,
            satisfaccion: Number,
            observaciones: String
        }],
    colegios: [{
            edad: Number,
            fecha: Date,
            colegio: String,
            cursos: String
        }],
    universidades: [{
            edad: Number,
            fecha: Date,
            colegio: String,
            cursos:String
        }],
    desempeno: [{
            general: Number,
            actual: Number,
            observaciones: String
        }],
    laboral: String,
    trabajos: [{
            entidad: String,
            cargo: String,
            fecha: Date,
            retiro: String
        }],
    satisfacciontrabajo: [{
            desarrollo: Number,
            remuneracion: Number,
            relaciones: Number,
            estres: Number,
            observaciones: String
        }],
    aficiones: [{
            tipo: String,
            frecuencia: Number,
            satisfaccion: Number,
        }],
    aficionesanteriores: [{
            tipo: String,
            frecuencia: Number ,
            satisfaccion: Number ,
        }],
    aficionesfuturas: [{
            tipo: String ,
            frecuencia: Number ,
            satisfaccion:  Number ,
        }],
    satisfaccionaficiones: Number,
    areasajuste: [{
            respetar: String ,
            tristeza:  String ,
            sexual: String ,
            amistades:  String ,
            relaciones:  String ,
            temor:  String ,
            alcohol:  String ,
            tratamiento:  String 
        }],
    impresion: Boolean
    ,
    conducta:  Boolean
    ,
    pronostico: Boolean
    ,
    evoluciones: [{
        fecha: Date,// type: Date },
        atencion: String ,
        user: String
    }],
    act:Boolean,
    created_at: Date,
    updated_at: Date,
    offset: 
         String
}
    