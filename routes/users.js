var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use('/userlogin', function(req, res, next) {
  console.log("user login request received")
  // get the username
  let username = req.body.username
  console.log(username)
  console.log("**")
  console.log(req.body)
  // set user_role
  let user_role = username == 'student@test.com' ? 'student'  : username == 'teacher@test.com' ? 'teacher' : ''
  // if invalid username entered
  if (user_role=='') {
    req.app.locals.loginerror = true
    req.app.locals.loginerrormessage = "Invalid username. Please try again!"
    res.redirect('/')
  } else {
    // update user_role
    req.app.locals.user_role = user_role
    res.redirect('/feed');
  }
});

module.exports = router;
