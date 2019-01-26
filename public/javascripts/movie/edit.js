// var app = angular.module('movie', []);
var app = angular.module('movie', []);
var formData= new FormData();
app.controller('editController', function ($scope, $http) {
    var id = $('#id').text();
    $scope.id=id;
    var email = getCookie("email");
    var data = {
        email
    }


    $http.get("/api/movie/" +id, data).then(function (res) {
        $scope.phatHanh = $("#datepicker").datepicker({ dateFormat: 'dd,MM,yyyy' }).val()
        $scope.tenPhim = res.data.phim.phim.tenPhim;
        $scope.theLoai = res.data.phim.phim.theLoai;
        $scope.phatHanh = res.data.phim.phim.phatHanh;
        $scope.moTa = res.data.phim.phim.moTa;
        $scope.hinh = res.data.phim.phim.hinh;
        $scope.checkLogin = res.data.checkLogin;

        $scope.movieType = ['Hanh dong', 'Tinh cam']
        $scope.thename = [
            { name: 'Hành Động', value: 'Hành Động' },
            { name: 'Tình Cảm', value: 'Tình Cảm' },
            { name: 'Gia Đình', value: 'Gia Đình' },
            { name: 'Kinh Dị', value: 'Kinh Dị' },
            { name: 'Hoạt Hình', value: 'Hoạt Hình' }
        ]
        $scope.theLoai = $scope.thename[0].value;

        $scope.suaPhim = function () {
            var ngayTao =Date.now();
            var ngay = $("#datepicker").datepicker("getDate").getTime();
            formData.append("tenPhim", $scope.tenPhim);
            formData.append("moTa", $scope.moTa);
            formData.append("theLoai", $scope.theLoai);
            formData.append("phatHanh", ngay);
            formData.append("id",id);
            formData.append("ngayTao",ngayTao)
            $http({
                method: 'PUT',
                url: '/api/movie',
                data: formData,
                headers: { 'Content-Type': undefined }
            }).then(function (res) {
                window.alert('Lưu phim thành công');
                window.location.href = "/";
            }).catch(function (res) {
                console.log(res)
            })

        }

     
    });

    $scope.chooseImage = function () {

        document.getElementById("fileUpdate").click()
    }


    $scope.logOut = function(){
        $http.get('/api/user/sign-out').then(function (res) {

               setCookie ('email','')
            window.location.href="/"
            })

    }

});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);

        formData.append("hinh", input.files[0]);
    }
}