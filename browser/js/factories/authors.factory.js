app.factory('AuthorsFactory', function($http){
	var Authors = {}

	Authors.fetchAll =  function(){
		return $http.get('/api/authors')
			.then(function(res){
				return res.data
			})
	}
	return Authors
})