  // This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  // First at the top of your routes.js file you'll have to require the controller
  var questions = require('./../controllers/questions.js');
  module.exports = function(app) {
    // modify the route to look like this
    //index
    app.get('/', function(req, res){
      questions.index(req, res);
    })
    //retrieiving all the questions
    app.get('/all', function(req, res){
      questions.retrieve_questions(req, res);
    })
    //adding a new question to the lsit
    app.post('/add_question', function(req, res){
      questions.add_question(req, res);
    })

    //adding an answer to question
    app.post('/add_answer', function(req, res){
      questions.add_answer(req, res);
    })

    //get question
    app.get('/question/:id', function(req, res){
      questions.retrieve_question(req, res);
    })

    //get question answers
    app.get('/question/answers/:id', function(req, res){
      questions.retrieve_answers(req, res);
    })
    //liking an answer
    app.get('/answer/like/:id', function(req, res){
      questions.add_like_to_answer(req, res);
    })
  };