var express = require('express');
var session = require('express-session')
var router = express.Router();
var userController = require('../controller/userController');
var authController = require('../controller/authController');

var jwt = require('jsonwebtoken');
var fileUpload = require('express-fileupload');
const path = require('path');

router.get('/profile', async function (req, res) {
    try {
        var token = req.session.token;
        var emailObj = jwt.decode(token);
        var userInfomation = await userController.getUserByEmail(emailObj.data)
        res.send({
            status: 200,
            userInfomation,
        })
    } catch (error) {

    }
})


router.post('/sign-up', async function (req, res) {
    try {
        var token = jwt.sign({ data: req.body.Email }, 'secret', { expiresIn: '1y' });
        req.session.token = token;
        var user = await userController.taoUser(req.body);
        user = JSON.parse(JSON.stringify(user))
        delete user.password;
        res.send({
            token:token,
            status: 200,
            user: user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }


});
router.get('/sign-out', async function (req, res) {
    try {
        req.session.destroy();
        res.send({
            status: 200,
            mess: 'LogOut Thành công'
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })

    }

})
router.post('/sign-in', async function (req, res) {
    try {

        var token = jwt.sign({ data: req.body.Email }, 'secret', { expiresIn: '1y' });
        req.session.token = token;
        var user = await userController.checkLogin(req.body);
        res.send({
            token: token,
            user , 
            status: 200,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }
});

router.put('/', fileUpload(), async function (req, res) {
    try {
       
        if (!req.files) {
            req.body.hinh = "user.png";
            var user = await userController.editProfile(req.body);
            res.send(user)
        }
        else {
            var file = req.files.hinh;
            req.body.hinh = file.name;
            // luu file
            var url = path.join(path.join(__dirname, '../../'), 'public/images/');
            file.mv(url + req.files.hinh.name, async function () {
                var user = await userController.editProfile(req.body);
                res.send(user)
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }
});

router.put('/password', async function (req, res) {
    try {
        
        user = await userController.changePassword(req.body);
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(500).send({ errorMessage: error.message })
    }
});
module.exports = router;

