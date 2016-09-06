app.controller('BooksCtl', function ($scope, BooksFactory) {
	BooksFactory.fetchAll()
		.then(function(data){
			$scope.books = data
		});

})