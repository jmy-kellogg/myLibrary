app.factory('AddBookFactory', function($http){
	AddBookFactory = {};

	AddBookFactory.create = function(data){
		var newBook = {
			firstName: data.firstName.$viewValue,
			lastName: data.lastName.$viewValue,
			title: data.title.$viewValue,
			year: data.year.$viewValue, 
			picture: data.picture.$viewValue,
			synopsis: data.synopsis.$viewValue,
		}
		return $http.post('/api/add', newBook)
			.then(function(serverRes){
				return serverRes.data
			})
	}


	return AddBookFactory
})