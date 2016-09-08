app.controller('addBookCtl', function($scope, AddBookFactory){
	$scope.submit = function(){
		if($scope.addBookForm.$isValid) return;
		AddBookFactory.create($scope.addBookForm)

	}
})