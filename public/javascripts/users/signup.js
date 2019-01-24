
var app = angular.module('users', []);
app.controller('usersController', function ($scope, $http) {
    function checkLogin()
    {
        var error = false
        if((!$scope.password) || (!$scope.email ))
        {
            error = true
        }
        return error
    }

    $scope.dangKy = function () {
        var check = checkLogin()
        if(!check){
        var data = {
            tenNguoiDung: $scope.userName, 
            email: $scope.email, 
            password: $scope.password,
        }
        $http.post( '/api/users', data).then(function (res) {
            
            console.log(res)
            window.alert("Tạo tài khoản thành công")
            window.location.reload();
            window.location.href="/";
            let userName = res.data.userDangKy.tenNguoiDung
            let userName = res.data.userDangKy.email
            setCookie('email',email)
            // window.alert(res.data.errorMessage);
             setCookie('tenNguoiDung', userName)
           
        })}
        else window.alert("Vui lòng nhập đầy đủ thông tin")

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