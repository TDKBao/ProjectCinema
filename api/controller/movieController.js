const mongoose = require('mongoose');
require('../model/Moive')
const Movie = mongoose.model('Movie');

const taoPhim = async function (data) {
    var movie = new Movie(data);

    await movie.save();
    return {
        movie: movie
    };
}
const layPhim = async function(){
    var listMovie = await Movie.find()
    return{listMovie:listMovie}
}

module.exports = {
    taoPhim: taoPhim,
    layPhim: layPhim
}