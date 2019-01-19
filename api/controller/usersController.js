const mongoose = require('mongoose');
const Users = mongoose.model('Users');

const dangKy = async function (data) {
    var user = new Users(data);
    await user.save();
    return {
        user: user
    };
}
const getUserByEmail = async function(email){
    let user= await User.findOne({Email:email});
    return   user;
    
}


const checkLogin = async function(data){
    let user = await Users.findOne({email:data.Email});
    if(user){
        if(user.password===data.password){
        return user
        }
        else{
            return 'Sai mật khẩu'
        }

    }
    else{
        return 'Sai email'
    }
}



module.exports = {
    dangKy: dangKy,
    getUserByEmail:getUserByEmail,
    checkLogin:checkLogin
}