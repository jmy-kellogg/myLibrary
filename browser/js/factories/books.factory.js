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

	BooksFactory.deleteBook = function(id){
		return $http.delete('/api/books/' + id )
		.then(function(resp){
			console.log('done deleting', resp);
			return resp.data
		})

	}

	return BooksFactory;
})