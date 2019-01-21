var app = angular.module('users', []);
var   NON_EMPTY_CLASS = 'ng-empty';
app.controller('usersController', function ($scope, $http) {
    $scope.checkLogin==false;
    $scope.dangKy = function () {
        var data = {
            tenNguoiDung: $scope.tenNguoiDung, 
            email: $scope.email, 
            password: $scope.password,
        }
        $http.post( '/api/users', data).then(function (res) {
            
            console.log(res)
            window.alert("Tạo tài khoản thành công")
            window.location.reload();
            window.location.href="/";
            let userName = res.data.userDangKy.user.tenNguoiDung

             setCookie('tenNguoiDung', userName)
           
        })

    }
});
//         $http.post('/api/movie', data).then(function (res) {
//             console.log(res)
//             window.alert("Tạo phim thành công")
//             window.location.reload();
//             window.location.href="/";
//         })

//     }
//     $scope.theLoai = [
//         { name: 'Hành Động', value: 'Hành Động' },
//         { name: 'Kinh Dị', value: 'Kinh Dị' },
//         { name: 'Tình Cảm', value: 'Tình Cảm' },
//         { name: 'Gia Đình', value: 'Gia Đình', },
//         { name: 'Viễn Tưởng', value: 'Viễn Tưởng' }
//     ];
//     $scope.TheLoai=$scope.theLoai[0].value;
// });
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }