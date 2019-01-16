var express = require('express');
var router = express.Router();
var movieController = require('../controller/movieController')

/* GET home page. */
router.get('/', async function (req, res) {
    var dsPhim = await movieController.layPhim();
    res.send({
        dsPhim: dsPhim
    })
});

router.get('/:id', async function (req, res) {
    var chiTiet = await movieController.getChiTietPhim(req.params.id);
    res.send(chiTiet);
});

router.post('/', async function (req, res) {
    //   console.log(req.body)
    var movie = await movieController.taoPhim(req.body);

    res.send({
        movie: movie
    })

    //   res.send(req.body)
});



module.exports = router;
