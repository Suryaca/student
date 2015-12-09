// Importing the modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var http = require('http');
var logger = require('morgan');
var path = require('path');

//initialize express app
var app = express();

// Declaring the Settings from Secrets from Config
var studentController = require('./controllers/student');

mongoose.connect("mongodb://localhost:27017/students");
mongoose.connection.on('error',function(){
  console.log("Mongo Error in connection");
});

//Configuring the Middleware.

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './server/public')));


app.get('/students/:id', studentController.getStudentWithId);
app.get('/students', studentController.getStudents);
app.post('/students', studentController.postStudents);
app.put('/students/:id',studentController.putStudentWithId);
app.delete('/students/:id',studentController.deleteStudentWithId);

var server = http.createServer(app);
// Listening at set port 3000
server.listen('3000', function(){
  console.log("Server at port 3000");
});
