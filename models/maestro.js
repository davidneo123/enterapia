const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const MaestroSchema = new Schema({
    tipo: {
        type: String
            // required:true
    },
    ord: {
        type: String
    },
    cod: {
        type: String
            // required: true
    },
    des: {
        type: String
            //required: true
    },
    atri1: {
        type: String
    },
    atri2: {
        type: String
    },
    atri3: {
        type: String
    },
    act: {
        type: Boolean
            // default: true
            //required: true
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
MaestroSchema.pre('save', function(next){
  now = new Date()
  same=this
  //same.updated_at = now
  if ( !same.created_at ) {
    same.created_at = now;
    same.offset= now.getTimezoneOffset() 
 }
  next()
 }); 


/* // Sets the created_at parameter equal to the current time
MaestroSchema.pre('save', function(next) {
    now = new Date();
    this.fem = now;
    offset: now.getTimezoneOffset()
    if (!this.fec) {
        this.fec = now;
        offset: now.getTimezoneOffset()
    }
    next();
});
 */

const Maestro = module.exports = mongoose.model('Maestro', MaestroSchema);

module.exports.getMaestroByCod = function(cod, resource){
  const query = {cod: {$regex: new RegExp('^' + cod, 'i')}}
  Maestro.findOne(query, resource)
}