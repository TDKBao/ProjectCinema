const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');


const verifyUser = async function (token)
 {
    var emailObj = jwt.decode(token);
    let user = await User.findOne({email: emailObj.email})
    if(!user)
    {
        throw new Error('Người dùng không tồn tại !')
        
    }
    return user;
}
module.exports ={
    verifyUser: verifyUser
}