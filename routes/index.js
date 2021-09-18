var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fillactive Community App' });
});

router.get('/events', function(req, res, next) {
  res.render('events', { 
    title: 'Fillactive Community App | Events',
    user_role: req.app.locals.user_role
  });
});

router.get('/edit_event', function(req, res, next) {
  res.render('events/edit_event', { title: 'Fillactive | Edit Event' });
});

module.exports = router;
