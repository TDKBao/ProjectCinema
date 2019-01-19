var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    tenPhim: { type: String },
    theLoai: { type: String },
    ngayRaMat: { type: Number },
    noiDung: { type: String },
    image:{type:String}
}
);

module.exports = mongoose.model('Movie', MovieSchema);