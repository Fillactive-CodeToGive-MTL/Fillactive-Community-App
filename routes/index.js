var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fillactive Community App' });
});

router.get('/events_teacher', function(req, res, next) {
  res.render('events_teacher', { title: 'Fillactive Community App' });
});

router.get('/events_student', function(req, res, next) {
  res.render('events_student', { title: 'Fillactive Community App' });
});

module.exports = router;
