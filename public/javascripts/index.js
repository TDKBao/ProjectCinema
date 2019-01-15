var app = angular.module('movie', []);

app.controller('listMovieController', function ($scope, $http) {
    
    
    
    $http.get('api/movie/').then(function(res){
        console.log(res);
    })
    
});

