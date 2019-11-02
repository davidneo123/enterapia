const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

/* const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://davidarbe:71261757@cluster0-u5dbz.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("historia-clinica").collection("users");
  // perform actions on the collection object
  client.close();
}); 

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb+srv://davidarbe:71261757@cluster0-u5dbz.mongodb.net/test?retryWrites=true&w=majority", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
                
});*/


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || config.database, { useNewUrlParser: true });
//Connect To Database
//mongoose.connect(process.env.MONGODB_URI || config.database, { dbName: 'test' }).then(() => {
//       console.log('Connection to the Atlas Cluster is successful!')
//  })    .catch((err) => console.error(err));;

//On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');

const maestros = require('./routes/maestros');

const pacientes = require('./routes/pacientes');

const historias = require('./routes/historias');

const dates = require('./routes/dates');

// Port Number
const port = process.env.PORT || config.port;
//const port =  4200;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use('/maestros', maestros);

app.use('/pacientes', pacientes);

app.use('/historias', historias);

app.use('/dates', dates);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});