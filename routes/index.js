var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/movie/create', function(req, res) {
  res.render('movie/create', { title: 'Create Movie' });
});

module.exports = router;
