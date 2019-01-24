var app = angular.module('movie', []);
app.controller('detailsController', function ($scope, $http) {
  var id = $('#id').text();
  var email = getCookie("email")
  $scope.chiTietPhim = function () {
    var data = {
      id: id,
      email: email
    }
    $scope.email = getCookie("email");
    $scope.tenNguoiDung = getCookie("tenNguoiDung");
    $http.post('/api/movie/' + id, data).then(function (res) {
      $scope.phim = res.data.chiTiet;
      $scope.user = res.data.chiTiet.email
      $scope.checkuser = function () {
        if (res.data.chiTiet.email === email) {
          return true;
        } else {
          return false;
        }

      }
      console.log(res)
    })
  }
  $scope.chiTietPhim()
  $scope.logOut = function () {
    // $http.get('/api/user').then(function (res) {

    //        var mess= res.data.mess
    //         console.log(res)
    //     })
    // window.location.href = '/'; 

    window.alert("Đăng xuất")
    setCookie("tenNguoiDung", '')

  }
  $scope.clickUpLoadFilm = function () {
    setCookie("movieId", id);
    window.location.href = $scope.id + '/edit'
  }

})

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
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
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}