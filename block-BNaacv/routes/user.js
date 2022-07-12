var express = require('express');
var router = express.Router();

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {
  res.json(req.body);
});

router.get('/', (req, res) => {
  res.render('users');
});

router.get('/:id', (req, res) => {
  res.render('singleUser');
});

module.exports = router;
