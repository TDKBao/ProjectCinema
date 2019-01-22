var app= angular.module('movie',[]);

app.controller('profileController',function($scope,$http){
    // $scope.checkLogin=false;
    // $scope.dangNhap = function(){
    //     var data={
            
    //         Email:$scope.email,
    //         password:$scope.password
            

    //     }
    //     $http.post(window.location.origin+'/api/users/edit',data).then(function(res){
    //         // console.log(res)
    //         if (res.data.user === "Sai mật khẩu") {
    //             window.alert('Sai mk');
                
    //         } else if (res.data.user === "Sai email") {
    //             window.alert('Bạn nhập sai email');
    //         } else {
    //             window.alert('Đăng nhập thành công');   
    //             window.location.href="/"
    //             let userName = res.data.user.tenNguoiDung
    //             setCookie('tenNguoiDung', userName)
    //         }
    //     }).catch(function(res){
    //         console.log(res)
    //     })
    // }
});

