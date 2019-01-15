var app = angular.module('movie', []);
app.controller('createController', function ($scope, $http) {
    $scope.taoPhim = function () {
        var ngayRaMat = $('#datepicker').datepicker("getDate").getTime();
        var data = {
            tenPhim: $scope.tenPhim,
            noiDung: $scope.noiDung,
            theLoai: $scope.TheLoai,
            ngayRaMat: ngayRaMat

        }



        $http.post('/api/movie', data).then(function (res) {
            console.log(res)
        })

    }
    $scope.theLoai = [
        { name: 'Hành Động', value: 'Hành Động' },
        { name: 'Kinh Dị', value: 'Kinh Dị' },
        { name: 'Tình Cảm', value: 'Tình Cảm' },
        { name: 'Gia Đình', value: 'Gia Đình', },
        { name: 'Viễn Tưởng', value: 'Viễn Tưởng' }
    ];
    $scope.TheLoai=$scope.theLoai[0].value;
});
