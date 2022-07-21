var express = require('express');
var router = express.Router();
var User = require('../models/user');

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

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('users', { users: users });
  });
});

router.get('/:id', (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    res.render('singleUser', { user: user });
  });
});

router.get('/:id/edit', (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    res.render('edituserform', { user: user });
  });
});

router.post('/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updateduser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

module.exports = router;
