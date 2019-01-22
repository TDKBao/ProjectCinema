var app = angular.module('movie', []);
var movieId = getCookie("movieId");
var formData = new FormData()


 
app.controller('editController', function ($scope, $http) {
    $scope.tenNguoiDung = getCookie("tenNguoiDung");

$scope.suaPhim = function(){
    var ngayRaMat = $('#datepicker').datepicker("getDate").getTime();
    formData.append("tenPhim", $scope.tenPhim);
    formData.append("noiDung", $scope.noiDung);
    formData.append("theLoai", $scope.TheLoai);
    formData.append("ngayRaMat", ngayRaMat);
    formData.append("movieId", movieId);

    $http.post('/api/movie/edit', formData, {
        transformRequest: angular.identity,
        headers: {
            'Content-Type': undefined
        }
    })
    .then(function (res) {
        console.log(res)
        window.alert("Sửa phim thành công")
        window.location.reload();
        window.location.href = "/";
    })
}
$scope.logOut = function(){
   
    setCookie("tenNguoiDung",'')

}

$scope.theLoai = [
    { name: 'Hành Động', value: 'Hành Động' },
    { name: 'Kinh Dị', value: 'Kinh Dị' },
    { name: 'Tình Cảm', value: 'Tình Cảm' },
    { name: 'Gia Đình', value: 'Gia Đình', },
    { name: 'Viễn Tưởng', value: 'Viễn Tưởng' }
];
$scope.TheLoai = $scope.theLoai[0].value;

$scope.clickUploadImage = function () {
    document.getElementById('fileInput').click();
};


});

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