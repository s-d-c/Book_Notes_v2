bookNotesApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider

    //Home state
    .state('home', {
      url: '/',
      templateUrl: './app/components/main/home.html'
    })
});