var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    tenNguoiDung: { type: String },
    email: { type: String },
    password: { type: String },
    passwordConf:{type:String}
}
);

module.exports = mongoose.model('Users', MovieSchema);