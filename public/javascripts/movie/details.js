var app = angular.module('movie', []);
app.controller('detailsController', function ($scope, $http) {
        var id = $('#id').text()
        $http.get('/api/movie/' + id).then(async function (res) {
            $scope.phim=res.data.chiTiet;            
            await document.getElementById('image').setAttribute('src',`images/${$scope.phim.tenPhim}.png`);
            console.log(res)
        })

})