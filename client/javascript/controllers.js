questions.controller('Index', function($scope, IndexFactory){
	IndexFactory.retrieve_questions(function(data){
		$scope.questions = data;
	})
})

questions.controller('AddQuestion', function($scope, $location, AddQuestionFactory){
	$scope.addQuestion = function(){
		AddQuestionFactory.add_question($scope.question_info);
		$location.path('/');
	}
})

questions.controller('Answers', function($scope, $routeParams, AnswerFactory){
	AnswerFactory.get_answers($routeParams.id, function(data){
		$scope.answers = data;
	})
	$scope.likeAnswer = function(id){
		AnswerFactory.like_answer(id);
	};
})

questions.controller('AddAnswer', function($scope, $routeParams, AddAnswerFactory, $location){
	AddAnswerFactory.getQuestion($routeParams.id, function(data){
		$scope.question = data;
	})
	$scope.addAnswer = function(id){
		AddAnswerFactory.addAnswer(id, $scope.answer_info);
		$location.path('/question/'+id);
	}
})