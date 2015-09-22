// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create our friendSchema
var QuestionSchema = new mongoose.Schema({
  question: String,
  description: String,
  name: String,
  answers: [{
  	answer: String,
  	description: String,
  	name: String,
  	likes: {type: Number, default: 0},
  	created_at: {type: Date, default: Date.now}
  }],
  created_at: {type: Date, default: Date.now}
  
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Question', QuestionSchema);
// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config file and then since the model is defined we'll be able to access it from our controller