angular.module('directives')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/partials/home.html'
    })

  $locationProvider.html5Mode(true);

}]);
