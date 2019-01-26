var app = angular.module('movie', []);

app.controller('detailController', function ($scope, $http) {
    var id = $('#id').text();
    $scope.id=id;
    var email = getCookie("email");
    var data = {
        email
    }
    $http.get("/api/movie/"+ id, data).then(function (res) {
        $scope.thongtinphim = res.data.phim;
        $scope.checkLogin = res.data.checkLogin;
        $scope.user = res.data.user;
        $scope.checkuser = function () {
            if (res.data.phim.phim.nguoiTao === email) {
                return true;
            } else {
                return false;
            }

        }
    }).catch(function (res) {
        console.log(res)
    })


    $scope.xoaPhim = function () {
        $http.delete("/api/movie/"+id,data).then(function (res) {
            $scope.checkLogin = res.data.checkLogin;
            window.alert('Xóa phim thành công!');
            window.location.href = "/";

        }).catch(function (res) {
            console.log(res)
        })

    }


    $scope.logOut = function () {
        $http.get('/api/user/sign-out').then(function (res) {
            setCookie("email", '')
            window.location.href = "/"
        })

    }

});