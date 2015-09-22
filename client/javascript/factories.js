questions.factory('IndexFactory', function($http){
	var factory = {};
	factory.retrive_questions = function(callback){
		$http.get('/all').then(function(data){
			questions_array = data;
			callback(questions);
		})
	}
	return factory;
});

questions.factory('AddQuestionFactory', function($http){
	var factory = {};
	factory.add_question = function(data){
		var question = data.question;
		//Add a check for length, etc.

		$http.post('/add_question', question).then(function(output){
			output = output.replace(/"/g, "");
			questions_array.push({
					_id: output,
					question: info.question,
					details: info.details,
					created_at: Date.now()
				});
		})
	}
	return factory;
})

questions.factory('AnswerFactory', function($http){
	var factory = {};
	var answers = [];
	factory.get_answers = function(id, callback){
		$http.get('/question/answers'+id).then(function(answer_data){
			answers = answer_data;
			callback(answers);
		})
	};
	factory.like_answer = function(id, callback){
		console.log(id);
		$http.get('/answer/like/'+id).then(function(output){
			console.log(output);
		});
	};
	return factory;
})

questions.factory('AddAnswerFactory', function($http){
	var factory = {};
	var question;
	factory.getQuestion = function(id, callback){
		$http.get('/question/'+id).then(function(output){
			question = output;
			console.log(question);
			callback(question);
		})
	}
	factory.addAnswer = function(id, data){
		var answer = data.answer;
		$http.post('/add_answer', data).then(function(output){
			console.log(output);
		})
	}
})