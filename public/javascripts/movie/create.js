var app = angular.module('movie', []);
var formData = new FormData()


app.controller('createController', function ($scope, $http) {
    function validate() {
        var error = false
        if (!$scope.tenPhim) {
            error = true
        }
        return error
    }
    $scope.taoPhim = function () {

        var rong = validate()
        if (!rong) {
            try {
                var ngayRaMat = $('#datepicker').datepicker("getDate").getTime();
                formData.append("tenPhim", $scope.tenPhim);
                formData.append("noiDung", $scope.noiDung);
                formData.append("theLoai", $scope.TheLoai);
                formData.append("ngayRaMat", ngayRaMat);
                if (formData.get('image')) {
                    $http({
                        method: 'POST', url: '/api/movie', headers: {
                            'Content-Type': undefined
                        },
                        data: formData,
                        headers: { 'Content-Type': undefined }
                    }).then(function (res) {
                        console.log(res)
                        window.alert("Tạo phim thành công")
                        window.location.reload();
                        window.location.href = "/";
                    })
                }
                else window.alert("Vui lòng nhập hình ảnh của phim")
            } catch (error) {
                console.log(error)
                res.status(400).send({ errorMessage: error.message })

            }

        }
        else window.alert("Vui lòng nhập tên phim")

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
        formData.append("image", input.files[0]);
    }
}

$("#inputFile").change(function () {
    readURL(this);
});

