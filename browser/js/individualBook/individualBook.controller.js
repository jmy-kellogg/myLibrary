app.controller('BookCtl', function ($scope, BookFactory) {
	
	BookFactory.getBook(id)
		.then(function(data){
			$scope.book = data
		});

})