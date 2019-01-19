var app = angular.module('movie', []);

app.controller('listMovieController', function ($scope, $http) {
    $scope.tenNguoiDung = undefined
    $scope.isLogin = false

    $http.get('api/movie/').then(function(res){
        $scope.listMovie = res.data.dsPhim.listMovie;
        $scope.user = res.data.user;
        $scope.checkLogin=res.data.checkLogin;
        console.log($scope.listMovie);
        $scope.tenNguoiDung = getCookie("tenNguoiDung")
        
        if (!$scope.tenNguoiDung) {
            $scope.isLogin = false
        } else {
            $scope.isLogin = true
        }

    })
    
    $scope.logOut = function(){
        // $http.get('/api/user').then(function (res) {

        //        var mess= res.data.mess
        //         console.log(res)
        //     })
        setCookie("tenNguoiDung",'')

    }

});


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }