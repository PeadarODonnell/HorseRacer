var express = require('express');
var router = express.Router();
var Comment = require('../models/comments');
var Leaderboard = require('../models/leaderboard');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/feed', function(req, res, next) {  
  Leaderboard.find({}, function (err, scores) {
        if (err)
            res.send(err);
console.log(scores);
        res.render('feed', {score: scores});
    });
  
});

router.get('/getHighscores', function(req, res, next)
{
    Leaderboard.find({}, function (err, scores) {
        if (err)
            res.send(err);

        res.json(scores);
    });
});

router.post('/addHighscore', function(req, res, next) {

    // Extract the request body which contains the comments
    //var clean = sanitize(req.body);
    //sanitize(req.body.userName);
    //console.log(req.body);
    console.log(req.body.userName);
    uN = new Leaderboard(req.body);
    uN.save(function (err, savedScore) {

        if (err)
            throw err;

        res.json({
            "userName": savedScore.userName
        });
    });
});

module.exports = router;
