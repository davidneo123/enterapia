const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const config = require('../config/database')
//const timeZone = require('mongoose-timezone')
mongoose.Promise = global.Promise
//var rolesSchema = new Schema({ super: Boolean,psico: Boolean,admin: Boolean});
// User Schema
const UserSchema = mongoose.Schema({
  
  id: {
    type: String
  },
  tip: {
    type:String
  },
  name: {
    type: String
  },
  email: {
    type: String
    //required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles:{type:[Boolean],default:false},
  psico:{
    type:Boolean
  },
  admon:{
    type:Boolean
  },
  super:{
    type:Boolean
  },
  act:{
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
//}, { timestamps: true })

// Sets the created_at parameter equal to the current time
 UserSchema.pre('save', function(next){
 now = new Date()
 same=this
 //same.updated_at = now
 if ( !same.created_at ) {
   same.created_at = now;
   same.offset= now.getTimezoneOffset() 
}
 next()
}); 

// UserSchema.pre('updateOne', function(next){
//  now = new Date();
//  this.updated_at = now;
// //  offset: now.getTimezoneOffset() 
// //  if(!this.fec) {
// //  this.fec = now.now;
// //  offset: now.getTimezoneOffset() 
// //  }
//  next();
// });

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, resource){
  User.findById(id, resource);
}

module.exports.getUserByUsername = function(username, resource){
  const query = {username: {$regex: new RegExp('^' + username, 'i')}}
  User.findOne(query, resource);
}

module.exports.getUserByDoc = function(doc, resource){
  const query = {id: {$regex: new RegExp('^' + doc, 'i')}}
  User.findOne(query, resource);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.editUser = function(newUser, callback){
    var id=newUser._id;
    this.getUserById(id, (err, user) => {
    if(err) throw err;
    if(user){  
      if(newUser.password===user.password){
    User.updateOne({_id:id},newUser, function(err,resource){
            //newUser.save(callback);
                if(err) throw err;
            callback(null, resource);
          });
      }else{
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            User.updateOne({_id:id},newUser, function(err,resource){
            //newUser.save(callback);
                if(err) throw err;
                callback(null, resource);
          });
          });
        });
      }    
   }
 })
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}