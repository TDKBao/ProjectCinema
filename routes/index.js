var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/movie/create', function(req, res) {
  res.render('movie/create', { title: 'Create Movie' });
});

router.get('/:id', function(req, res) {
  var id = req.params.id;
  res.render('movie/details', { id: id });
});

router.get('/users/signup', function(req, res) {
  res.render('users/signup', { title: 'Sign Up' });
});
module.exports = router;
