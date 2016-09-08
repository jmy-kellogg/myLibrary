app.config(function($stateProvider){
	$stateProvider.state('book', {
		url: '/books/:id',
		templateUrl: '/js/individualBook/individualBook.html',
		controller: 'BookCtl'
	})
})