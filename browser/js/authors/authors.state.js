app.config(function($stateProvider){
	$stateProvider.state('authors', {
		url: '/authors',
		templateUrl: '/js/authors/authors.html',
		controller: 'AuthorsCtl'
	})
});