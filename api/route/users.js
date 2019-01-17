var express = require('express');
var router = express.Router();
var userController = require('../controller/usersController')

/* GET home page. */
router.post('/',async function(req,res){
    try {
    var userDangKy = await userController.dangKy(req.body);
    res.send({userDangKy:userDangKy});
        
    } catch (error) {
         console.log(error)
        res.status(500).send({error:error})
    }
    
})
module.exports=router;