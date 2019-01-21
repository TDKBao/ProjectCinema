const mongoose = require('mongoose');
const Users = mongoose.model('Users');

const dangKy = async function (data) {
    var user = new Users(data);
    await user.save();
    return {
        user: user
    };
}
const getUserByEmail = async function (email) {
    let user = await User.findOne({ Email: email });
    return user;
}

const checkLogin = async function (data) {
    let user = await Users.findOne({ email: data.Email });
    if(!user){
        throw new Error('User not found')
    }
     if (user.password !== data.password){
        throw new Error('User not found')
     }
     return user
    // if (user) {
    //     if (user.password === data.password) {
    //         return user
    //     }
    //     else {
    //         return false
    //     }
    // }
    // else {
    //     return false
    // }
}



module.exports = {
    dangKy: dangKy,
    getUserByEmail: getUserByEmail,
    checkLogin: checkLogin
}