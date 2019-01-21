var express = require('express');
var session = require('express-session')
var router = express.Router();
var userController = require('../controller/usersController');
var jwt = require('jsonwebtoken');

/* GET home page. */
router.post('/', async function (req, res) {
    try {
        var userDangKy = await userController.dangKy(req.body);
        var token = jwt.sign({ data: req.body.Email }, 'secret', { expiresIn: '1y' });
        req.session.token = token;
        res.send({ userDangKy: userDangKy });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error })
    }

})
// router.get('/', async function (req, res) {
//     req.session.destroy();
//     res.send({
//         mess: 'LogOut Thành công'
//     })
// })
router.post('/login', async function (req, res) {
    try {
        var user = await userController.checkLogin(req.body);
        var token = jwt.sign({ data: req.body.Email }, 'secret', { expiresIn: '1y' });
        req.session.token = token;
        res.send({
            user: user
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({errorMessage: error.message})
    }


});
module.exports = router;