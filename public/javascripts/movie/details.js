var app = angular.module('movie', []);
app.controller('detailsController', function ($scope, $http) {
    var id = $('#id').text()
    $http.get('/api/movie/' + id).then(function (res) {

        $scope.phim = res.data
        $scope.id = res.data._id
        console.log(res)
        $scope.clickUpLoadFilm = function () {
            setCookie("movieId",id);
            window.location.href = $scope.id + '/edit'
        }
        // $http.put('api/movie'+ id +'/edit').then(function(res){
        //     $scope.movie = response.data.cinema
        //     $scope.name = response.data.cinema.name
        //     $scope.content = response.data.cinema.content
        //     $scope.genre = response.data.cinema.genre
        //     $scope.formTitle = 'Sửa phim'
        //     $scope.buttonTitle = 'Lưu phim'
        //     $('#datepicker').data('DateTimePicker').destroy()
        //     $('#datepicker').datetimepicker({
        //       format: 'DD/MM/YYYY',
        //       date: new Date(response.data.cinema.releaseDate)
        //     })
        //     $('.loader').fadeOut(500)
        //   },
        //   function (error) {
        //     console.log(error)
        // }
    })


})


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }