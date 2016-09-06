app.config(function($stateProvider){
	$stateProvider.state('addBook', {
		url: '/add',
		templateUrl: 'js/addBook/addBook.html',
		controller: 'addBookCtl'
	})
})