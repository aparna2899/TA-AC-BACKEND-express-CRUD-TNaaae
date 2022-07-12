var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('users');
});

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.post('/', (req, res) => {
  res.json(req.body);
});

router.get('/:id', (req, res) => {
  res.render('singleUser');
});

router.get('/:id/edit', (req, res) => {
  //
});

router.put('/:id', (req, res) => {
  //
});

router.delete('/:id', (req, res) => {
  //
});

module.exports = router;
