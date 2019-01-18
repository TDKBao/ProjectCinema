var express = require('express');
var router = express.Router();
var movieController = require('../controller/movieController')
var fileUpload = require('express-fileupload')
/* GET home page. */
router.get('/', async function (req, res) {
    try {
        var dsPhim = await movieController.layPhim();
        res.send({
            dsPhim: dsPhim
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
    }


});

router.get('/:id', async function (req, res) {
    var chiTiet = await movieController.getChiTietPhim(req.params.id);
    res.send(chiTiet);
});


router.post('/', fileUpload(), async function (req, res) {
    //   console.log(req.body)
    try {
        req.body.flim = req.files.flim.name;
        var movie = await movieController.taoPhim(req.body);
    res.send({
        movie: movie
    })
    } catch (error) {
        console.log(error)
        res.status(500).send({error:error})
        
    }
    

    //   res.send(req.body)
});



module.exports = router;
