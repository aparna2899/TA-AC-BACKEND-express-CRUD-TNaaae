var express = require('express');
var router = express.Router();
var User = require('../model/user');

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, createdUser) => {
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;
