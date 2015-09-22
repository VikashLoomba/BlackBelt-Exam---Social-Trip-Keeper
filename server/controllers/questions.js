// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
module.exports = {
  index: function(req, res){
    res.render('index');
  },

  retrieve_questions: function(req, res){
    Question.find(function(err, res){
      if (err) {
        console.log(err);
      }
      else{
        res.send(res);
      }
    });
  },

  retrieve_question: function(req, res){
    Question.find({_id: req.params.id}, function(err, res){
      if (err) {
        console.log(err);
      }
      else{
        res.send(res);
      }
    })
  },

  retrieve_answers: function(req, res){
    Question.find({_id: req.params.id}, function(err, res){
      if (err) {
        console.log(err);
      }
      else{
        res.send(res);
      }
    });
  },

  add_question: function(req, res){
    var newQuestion = new Question(req.body);
    newQuestion.save(function(err, res){
      if (err) {
        console.log(err);
      }
      else{
        res.send(res);
      }
    });
  },

  add_answer: function(req, res){
    var answerInfo = {};
    var belongsToId = {_id: req.body.id};
    answerInfo.answer = req.body.answer;
    answerInfo.description = req.body.description;
    answerInfo.name = req.body.name;
    Question.update(belongsToId, {$addToSet: {answers: answerInfo}}, function(err, res){
      if (err) {
        console.log(err);
      }
      else{
        res.send(res);
      }
    }); 
  },

  add_like_to_answer: function(req, res){
    var belongsToAnswerId = {"answers._id": req.params.id};
    Question.update(belongsToAnswerId, {$inc: { next: 1 }}, function(err, res){
      if (err) {
        console.log(err);
      }
      else{
        console.log(res);
      }
    })
  }
}