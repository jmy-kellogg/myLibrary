app.controller('AuthorsCtl', function($scope, AuthorsFactory){
	AuthorsFactory.fetchAll()
		.then(function(data){
			$scope.authors = data
		})
})