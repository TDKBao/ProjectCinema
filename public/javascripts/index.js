var app = angular.module('movie', []);

app.controller('listMovieController', function ($scope, $http) {

    $http.get('api/movie/').then(function(res){
        $scope.listMovie = res.data.dsPhim.listMovie;
        console.log(res);

    })

});


