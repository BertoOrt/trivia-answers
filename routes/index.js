var express = require('express');
var router = express.Router();
var database = require('./../connection');
var answers = database.get('trivia');

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login to Trivia Answers'});
});

router.post('/login', function(req, res, next) {
  res.cookie('team', req.body.team);
  res.redirect('/');
});

router.use(function (req, res, next) {
  if (req.cookies.team === undefined) {
    res.redirect('/login')
  }
  else {
    next();
  }
})

router.get('/', function(req, res, next) {
  answers.find({}, function (err, data) {
    res.render('index', { title: 'Trivia Answers', answers: data, team: req.cookies.team });
  })
});

router.post('/logout', function(req, res, next) {
 res.clearCookie('team');
 res.redirect('/');
});

router.post('/delete', function(req, res, next) {
  answers.remove({});
  res.redirect('/');
});

router.post('/clear', function(req, res, next) {
  answers.update({}, { $set: {answer: ""}}, {multi: true});
  res.redirect('/');
});

router.post('/score', function(req, res, next) {
  answers.find({}, function (err, data) {
    for (var i = 0; i < data.length; i++) {
      var teamNumber = i+100;
      var team = req.body[teamNumber];
      answers.findOne({team: team}, function (err, teamData) {
        console.log(i);
        console.log(teamData,req.body[i], teamData.score, teamData.team, 'second');
        var point = teamData.score;
        if (teamData.score === undefined) {
          point = 0
        }
        var points = point + req.body[i];
        answers.update({team: team}, {$set: {score: 0}})
      })
    }
  })
  // answers.update({}, { $set: {answer: ""}}, {multi: true});
  res.redirect('/');
});

router.post('/answer', function(req, res, next) {
  answers.remove({team: req.cookies.team});
  answers.insert({team: req.cookies.team, answer: req.body.answer});
  res.redirect('/');
});

module.exports = router;
