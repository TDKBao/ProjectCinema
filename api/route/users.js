var express = require('express');
var session = require('express-session')
var router = express.Router();
var userController = require('../controller/usersController');
var jwt = require('jsonwebtoken');

/* GET home page. */
router.post('/', async function (req, res) {
    try {
        var token = jwt.sign({ data: req.body.Email }, 'secret', { expiresIn: '1y' });
        req.session.token = token;
        var userDangKy = await userController.dangKy(req.body);
        res.send({ userDangKy: userDangKy });

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error })
    }

})
router.get('/', async function(req,res){
    req.session.destroy();
    res.send({
        mess: 'LogOut Thành công'
    })
})
router.post('/login',async function(req,res){

    var token =jwt.sign({data: req.body.Email}, 'secret', { expiresIn: '1y' });
    req.session.token = token;
    var user = await userController.checkLogin(req.body);
   
    res.send({
        user:user
   
    })
   
   });
module.exports = router;