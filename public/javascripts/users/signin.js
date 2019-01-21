var app= angular.module('movie',[]);

app.controller('loginController',function($scope,$http){
    $scope.checkLogin=false;
    $scope.dangNhap = function(){
        var data={
            
            Email:$scope.email,
            password:$scope.password
            

        }
        $http.post(window.location.origin+'/api/users/login',data).then(function(res){
            // console.log(res)
            if (res.data.user === "Sai mật khẩu") {
                window.alert('Sai mk');
                
            } else if (res.data.user === "Sai email") {
                window.alert('Bạn nhập sai email');
            } else {
                window.alert('Đăng nhập thành công');
                window.location.href="/"
                let userName = res.data.user.tenNguoiDung
                setCookie('tenNguoiDung', userName)
            }
        }).catch(function(res){
            console.log(res)
        })
    }
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
