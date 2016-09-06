app.factory('BooksFactory', function($http){
	BooksFactory = {};

	BooksFactory.fetchAll = function (){
		return $http.get('/api/books')
		.then(function(res){
			return res.data
		})
	};

	BooksFactory.getImage = function(){
		return $http.get('/api/books')
		.then(function(res){
			return res.data.picture
		})
	}

	return BooksFactory;
})