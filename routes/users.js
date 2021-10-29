var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('Login');
});

router.get('/register', function(req, res, next) {
  res.send('Register');
});

module.exports = router;
