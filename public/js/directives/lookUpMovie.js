angular.module('directives')
.directive('movies', function() {
  return {
    restrict: 'A',

    templateUrl: '/views/directives/movies.html',

    controller: function($scope, $http) {
      $scope.getMovie = function(movie) {
        $http.get('http://www.omdbapi.com/?t=' + movie)
        .then(function(response) {
          $scope.movie = response.data;
        });
      }

      $scope.$watch('movieName', function() {
        $scope.getMovie($scope.movieName);
      });


    }
  }
});