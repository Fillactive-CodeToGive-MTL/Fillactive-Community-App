var express = require('express');
var router = express.Router();
// importing data
var events_data = require('../data/events_data')
var posts_data = require('../data/posts_data')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fillactive Community App' });
});

router.get('/feed', function(req, res, next) {
  res.render('feed', {
    posts_data: posts_data
  })
})

router.get('/events', function(req, res, next) {
  res.render('events', { 
    title: 'Fillactive Community App | Events',
    user_role: req.app.locals.user_role,
    events_data: events_data
  });
});

router.get('/edit_event', function(req, res, next) {
  res.render('events/edit_event', { title: 'Fillactive | Edit Event' });
});

module.exports = router;

router.get('/wellness-hub', function(req, res, next) {
  res.render('wellnesshub', {
    title: 'Fillactive Community App | Wellness Hub'
  });
});