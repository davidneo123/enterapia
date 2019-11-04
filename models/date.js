const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const DateSchema = new Schema({
    pac: {
        type: mongoose.Schema.Types.ObjectId,
        // required:true
    },
    nombreC: {
        type: String
    },
    nombreU: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    co1: {
        type: String
            // required: true
    },
    co2: {
        type: String
            //required: true
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    nota: {
        type: mongoose.Schema.Types.ObjectId
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

// Sets the created_at parameter equal to the current time
DateSchema.pre('save', function(next) {
    console.log('en save')
    now = new Date()
    same = this
    same.updated_at = now
    if (!same.created_at) {
        same.created_at = now;
        same.offset = now.getTimezoneOffset()
    }
    next()
});

const Date1 = module.exports = mongoose.model('Date', DateSchema);

// module.exports.getMaestroByCod = function(cod, resource){
//   const query = {cod: {$regex: new RegExp('^' + cod, 'i')}}
//   Maestro.findOne(query, resource)
// }