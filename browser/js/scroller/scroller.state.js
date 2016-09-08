'use strict';

app.config(function ($stateProvider) {
  // , $urlRouterProvider
  // $urlRouterProvider.otherwise('/');

  $stateProvider.state('scroller', {
    url: '/home',
    templateUrl: '/js/scroller/scroller.html',
    controller: 'ScrollerCtrl',
    resolve: {
      getBooks: function (BooksFactory) {
        return BooksFactory.fetchAll();
      }
    }
  });

});
