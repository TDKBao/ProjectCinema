const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');

const taoPhim = async function (data) {
    var movie = new Movie(data);
    await movie.save();
    return {
        movie: movie
    };
}

const layPhim = async function () {
    var listMovie = await Movie.find()
    return { listMovie: listMovie }
}

const getChiTietPhim = async function (id) {
    var chiTiet = await Movie.findOne({ _id: id });
    return chiTiet;
}

const suaPhim = async function (data) {
    var movie = new Movie(data);
    await movie.save();
    return {
        movie: movie
    };
}
module.exports = {
    suaPhim:suaPhim,
    taoPhim: taoPhim,
    layPhim: layPhim,
    getChiTietPhim: getChiTietPhim
}
