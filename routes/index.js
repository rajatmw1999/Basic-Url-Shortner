var express   = require('express'),
    router    = express.Router(),
    mongoose  = require('mongoose'),
    Urldata   = require('../models/urldata'),
    Logic     = require('../logic/logic');

router.get('/', function(req,res){
  res.render('index');
});

router.post('/url', function(req,res){
  var postUrl = req.body.url;
  var remainUrl = Logic(postUrl);
  var newUrlcode;
  Urldata.find({}, function(err, found){
        var codedata = remainUrl.substring(0,3) + found.length;
        var newUrl = new Urldata({
          code: codedata,
          url: "https://" + remainUrl
        });
        newUrl.save();
        newUrlcode = newUrl.code;
        res.render('donePage',{codedata:newUrlcode});
  });
});

module.exports = router;
