var app = angular.module('users', []);
var   NON_EMPTY_CLASS = 'ng-empty';
app.controller('usersController', function ($scope, $http) {
    $scope.dangKy = function () {
        var data = {
            tenNguoiDung: $scope.tenNguoiDung, NON_EMPTY_CLASS,
            email: $scope.email, NON_EMPTY_CLASS,
            matKhau: $scope.matKhau,NON_EMPTY_CLASS,
        }
        $http.post( '/api/users', data).then(function (res) {
            console.log(res)
            window.alert("Tạo tài khoản thành công")
            window.location.reload();
            window.location.href="/";
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
