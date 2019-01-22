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
    user = await User.findOne({Email:email})
    // let user = await Users.find({email: data.password})
    // if(!user){
    //     throw new Error('User not found')
    // }
    //  if (user.password !== data.password){
    //     throw new Error('User not found')
    //  }
    //  return user
    if (user) {
        if (user.password === data.password) {
            return user
        }
       else window.alert("Nhập sai mật khẩu")
    }}



module.exports = {
    dangKy: dangKy,
    getUserByEmail: getUserByEmail,
    checkLogin: checkLogin
}