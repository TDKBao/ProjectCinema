var app = angular.module('movie', []);
app.controller('editController', function ($scope, $http) {
var movieId = getCookie("movieId");


$http.post('/api/movie/edit', {movieId:movieId}).then(function(res){

    $scope.tenPhim=res.data.tenPhim;
    $scope.theLoai=res.data.theLoai;
    ngayRaMat=res.data.ngayRaMat;
    $scope.noiDung=res.data.noiDung;
    $scope.image=res.data.image;

    $scope.theLoai = [
        { name: 'Hành Động', value: 'Hành Động' },
        { name: 'Kinh Dị', value: 'Kinh Dị' },
        { name: 'Tình Cảm', value: 'Tình Cảm' },
        { name: 'Gia Đình', value: 'Gia Đình', },
        { name: 'Viễn Tưởng', value: 'Viễn Tưởng' }
    ];
    $scope.TheLoai = $scope.theLoai[0].value;
})
$scope.clickUploadImage = function () {
        document.getElementById('fileInput').click();
    };


});
var formData = new FormData()

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageUpload').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
        formData.append("image", input.files[0]);    }
}

$("#inputFile").change(function () {
    readURL(this);

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