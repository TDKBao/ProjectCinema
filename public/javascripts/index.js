var app = angular.module('movie', []);

app.controller('getController', function ($scope, $http) {
    $http.get('api/movie').then(function (res) {

    // Bien chua listphim
       $scope.user = res.data.user;
       $scope.checkLogin=res.data.checkLogin;
       $scope.listphim= res.data.listPhimObj.listphim;
       
    //    console.log( $scope.listphim);

        console.log(res)
    })

    $scope.logOut = function(){
        $http.get('/api/user/sign-out').then(function (res) {
               setCookie ('email','')
               window.location.href="/"
            })

    }

});