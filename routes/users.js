var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use('/userlogin', function(req, res, next) {
  console.log("user login request received")
  // update user_role
  req.app.locals.user_role = req.body.user_role
  res.redirect('/');
});

module.exports = router;
