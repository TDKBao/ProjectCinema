var app = angular.module('movie', []);
app.controller('detailsController', function ($scope, $http) {
        var id = $('#id').text();
        $scope.tenNguoiDung = getCookie("tenNguoiDung");
    $http.get('/api/movie/' + id, ).then(function (res) {
        $scope.phim = res.data
        $scope.id = res.data._id
        console.log(res)
    })
    $scope.logOut = function(){
        // $http.get('/api/user').then(function (res) {

        //        var mess= res.data.mess
        //         console.log(res)
        //     })
        setCookie("tenNguoiDung",'')

    }
$scope.clickUpLoadFilm = function () {
            setCookie("movieId",id);
            window.location.href = $scope.id + '/edit'
        }
     
})

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