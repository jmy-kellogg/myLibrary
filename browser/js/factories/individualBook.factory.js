app.factory('BookFactory', function($http){
	BookFactory = {};

	BookFactory.getBook = function(id){
		return $http.get('/api/book' + id)
		.then(function(data){
			$scope.book = data
		});

	return BookFactory 
}
