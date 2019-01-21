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

router.get('/users/signup', function(req, res, next) {
  res.render('users/signup', { title: 'Sign-up' });
});
router.get('/users/signin', function(req, res, next) {
  res.render('users/signin', { title: 'Sign-in' });
});

router.get('/:id/edit',function(req,res)
{
  var id = req.params.id;
  res.render('movie/edit',{id:id});
});

module.exports = router;
