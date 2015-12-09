var Student = require('../models/Student');

// get Student With ID
exports.getStudentWithId = function(req,res){
  Student.findById(req.params.id,function(err,Student){
    if(err)
      res.json({'ERROR': err});
    else
      res.json({'FOUND':Student});
  });
};
//Get All Students
exports.getStudents = function(req,res){
  Student.find({},function(err,Students){
    if(err)
      res.json({'ERROR':err});
    else
      res.json({'SUCCESS':Students, count:Students.length});
  });
};
//Create a New Student
exports.postStudents = function(req,res){
  var student = new Student({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    student.save(function(err, student){
      if(err)
        res.json({'ERROR':err});
      else
        res.json({'SUCCESS':student});
    });
};
//update Student
exports.putStudentWithId = function(req,res){
  Student.findById(req.params.id,function(err,Student){
    if(err)
    res.json({'ERROR':err});
    else
    {
      Student.firstName = req.body.firstName;
      Student.lastName = req.body.lastName;
    }
    Student.save(function(err){
      if(err)
        res.json({'ERROR':err});
      else
        res.json({'SUCCESS':Student});
    });
  });

};
// Delete a Student
exports.deleteStudentWithId = function(req,res){
  Student.findById(req.params.id,function(err,Student){
    if(err)
      res.json({'ERROR':err});
    else
    {
      Student.remove(function(err){
        if(err)
          res.json({'ERROR':err})
        else
          res.json({'REMOVED':Student});
      });
    }
  });
};
