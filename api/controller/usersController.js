const mongoose = require('mongoose');
const Users = mongoose.model('Users');

const dangKy = async function (data) {
    let user = await Users.findOne({ email: data.Email });
    if (user) {
        throw new Error('Email đã được sử dụng !')
    }
         user = new Users(data);
        await user.save();
        return {
            user: user
    };
}
const getUserByEmail = async function (email) {
    let user = await Users.findOne({ Email: email });
    return user;
}

const checkLogin = async function (data) {
    let user = await Users.findOne({ email: data.Email })
    if (!user) {
        throw new Error('')
    }
    if (user.password !== data.password) {
        throw new Error('')
    }
    return user
    // if (user) {
    //     if (user.password === data.password) {
    //         return user
    //     }
    //    else window.alert("Nhập sai mật khẩu")
    // }}


}
module.exports = {
    dangKy: dangKy,
    getUserByEmail: getUserByEmail,
    checkLogin: checkLogin
}