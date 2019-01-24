var app = angular.module('movie', []);

app.controller('loginController', function ($scope, $http) {
    function checkLogin() {
        var error = false;
        if ((!$scope.password) || (!$scope.email)) {
            window.alert("Vui lòng nhập đầy đủ thông tin")
        }
        else if (!$scope.password) {
            window.alert("Vui lòng nhập lại mật khẩu")
        }
        return error

    }
    $scope.dangNhap = function () {
        checkLogin()

        var data = {

            Email: $scope.email,
            password: $scope.password
        }
        $http.post(window.location.origin + '/api/users/login', data).then(function (res) {
            // console.log(res)

                if(res.data.user) {
                    let userName = res.data.user.tenNguoiDung
                    setCookie('email',email)
                    setCookie('tenNguoiDung', userName)
                } else {
                    alert('Thông tin đăng nhập không chính xác')
                }
            }
        ).catch(function (error) {
            alert(error.message)
        })
    };

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
})
