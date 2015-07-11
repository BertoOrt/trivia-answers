var express = require('express');
var router = express.Router();
var database = require('./../connection');
var answers = database.get('trivia');

router.get('/', function(req, res, next) {
  answers.find({}, function (err, data) {
    res.render('index', { title: 'Trivia Answers', answers: data, team: req.cookies.team });
  })
});

router.post('/delete', function(req, res, next) {
  answers.remove({});
  res.redirect('/');
});

router.post('/answer', function(req, res, next) {
  res.cookie('team', req.body.team);
  answers.update({team: req.body.team}, {team: req.body.team, answer: req.body.answer}, {upsert: true});
  res.redirect('/');
});

module.exports = router;
