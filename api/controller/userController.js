
const mongoose = require('mongoose');
const User = mongoose.model('User');

const taoUser = async function (data) {
    let user = await User.findOne({ Email: data.Email });
    if (user) {
        throw new Error('Email đã được sử dụng ! ')
    }

    user = new User(data);
    await user.save();
    return user

}

const getUserByEmail = async function (email) {
    let user = await User.findOne({ Email: email });
    return user;

}

const checkLogin = async function (data) {
    let user = await User.findOne({ Email: data.Email });
    if (user) {
        if (user.password === data.password) {
            throw new Error("Vui lòng nhập lại thông tin")

        }
        else {
            throw new Error("Vui lòng nhập lại thông tin")
        }

    }
    return user;
    }
const editProfile = async function (data) {
    let user = await User.findOne({ Email: data.Email });

    user.Email = data.Email;
    user.tenNguoiDung = data.tenNguoiDung;
    if (data.hinh) {
        user.hinh = data.hinh;
    }

    await user.save();
    return {
        user
    }

}
const changePassword=async function(data){
    let user = await User.findOne({ Email: data.Email });
  
    var check;
    
        if (user.password === data.oldPassword) {
            user.password=data.newPassword
            check=true;
           
        }
        else {
            check=false;
            
        }
        await user.save();
        return {user,check}

    }


module.exports = {
    changePassword:changePassword,
    taoUser: taoUser,
    getUserByEmail: getUserByEmail,
    checkLogin: checkLogin,
    editProfile: editProfile,

}


