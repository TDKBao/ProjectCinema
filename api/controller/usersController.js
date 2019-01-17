const mongoose = require('mongoose');
const Users = mongoose.model('Users');

const dangKy = async function (data) {
    var user = new Users(data);
    await user.save();
    return {
        user: user
    };
}
module.exports = {
    dangKy: dangKy,
}