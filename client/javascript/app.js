var questions = angular.module('questions', ['ngRoute']);
questions.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/partials/home.html',
		controller: 'Index'
	})
	.when('/new_question', {
		templateUrl: 'views/partials/new_question.html',
		controller: 'AddQuestion'
	})
	.when('/question/:id', {
		templateUrl: 'views/partials/question.html',
		controller: 'Answers'
	})
	.when('/question/:id/new_answer', {
		templateUrl: 'views/partials/new_answer.html',
		controller: 'AddAnswer'
	});	
});

var questions_array = [];