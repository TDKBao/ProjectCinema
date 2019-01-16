var app = angular.module('movie', []);
app.controller('detailsController', function ($scope, $http) {
        var id = $('#id').text();

        $http.get(window.location.origin + '/api/movie/' + id).then(function (res) {
            $scope.phim=res.data.chiTiet
            
            console.log(res)
        })

})