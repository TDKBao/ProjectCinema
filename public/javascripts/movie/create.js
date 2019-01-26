var app = angular.module('movie', []);
var formData = new FormData();

app.controller('createController', function ($scope, $http) {
    // $scope.tenNguoiDung = getCookie("tenNguoiDung");
    $scope.checkLogin = true;
    
    var validate = function () {
        if (!$scope.tenPhim) {
            window.alert('Vui lòng nhập tên phim')
            return false
        }
        if (!$scope.moTa) {
            window.alert('Vui lòng nhập mô tả')
            return false
        }
        return true
    }

    $scope.taoPhim = function () {
        // thoi gian hien hanh jquery
        // $scope.tempImage = '../../images/img'
        if (validate()) {
            var email = getCookie("email");
            var ngay = $("#datepicker").datepicker("getDate").getTime();
            var ngayTao = Date.now();
            formData.append("tenPhim", $scope.tenPhim);
            formData.append("moTa", $scope.moTa);
            formData.append("theLoai", $scope.theLoai);
            formData.append("phatHanh", ngay);
            formData.append("nguoiTao", email);
            formData.append("ngayTao", ngayTao)

            $http({
                method: 'POST',
                url: '/api/movie',
                data: formData,
                headers: { 'Content-Type': undefined }
            }).then(function (res) {
                window.alert('Tạo phim thành công');
                window.location.href = "/";
            }).catch(function (res) {
                console.log(res)
            })
        }
    }
    //option
    $scope.movieType = ['Hanh dong', 'Tinh cam']
    $scope.thename = [
        { name: 'Hành Động', value: 'Hành Động' },
        { name: 'Tình Cảm', value: 'Tình Cảm' },
        { name: 'Gia Đình', value: 'Gia Đình' },
        { name: 'Kinh Dị', value: 'Kinh Dị' },
        { name: 'Hoạt Hình', value: 'Hoạt Hình' }
    ]
    $scope.theLoai = $scope.thename[0].value;

    $scope.chooseImage = function () {
        document.getElementById("fileInput").click()
    }
    $scope.logOut = function () {
        $http.get('/api/user/sign-out').then(function (res) {
            setCookie('email', '')
            window.location.href = "/"
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