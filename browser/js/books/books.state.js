app.config(function($stateProvider){
	$stateProvider.state('books', {
		url: '/books',
		templateUrl: '/js/books/books.html',
		controller: 'BooksCtl'
	})
})