var app = angular.module('movie', []);

app.controller('profileController', function ($scope, $http) {
    $scope.checkLogin=true;
    $http.get(window.location.origin+"/api/user/profile").then(function(res){
         $scope.userinfomation= res.data.userInfomation;

    }).catch(function(res){
        console.log(res)
    })
    $scope.changePassword=function(){
        if(!$scope.oldPassword || !$scope.newPassword){
            window.alert('Vui lòng nhập mật khẩu để đổi')
        }
        else if(!$scope.newPassword)
        {
            window.alert('Mật khẩu không được để trống')
        }
        else if($scope.confirmPassword!==$scope.newPassword){
            window.alert('Xác nhận mật khẩu không đúng !')
        }
        else{
            $scope.Email=getCookie("email");
        var data={
            oldPassword:$scope.oldPassword,
            newPassword:$scope.newPassword,
            Email:$scope.Email
        }
        $http.put("/api/user/password",data).then(function(res){
           if(res.data.check===true){
            window.alert("Đổi mật khẩu thành công")
            window.location.href="/"
           }else{
                window.alert("Mật Khẩu cũ không đúng!")
            }
           
          
                 
        });
    
    }
}

    $scope.logOut = function(){
        $http.get('/api/user').then(function (res) {
               delete_cookie('email');
               window.location.href="/"
            })

    }
    $scope.check= function(){
        $scope.email=getCookie("email");
        if(!$scope.email){
           return false;
        }
        
            return true;
        
        
    }
});
