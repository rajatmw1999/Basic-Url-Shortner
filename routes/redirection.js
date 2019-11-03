var express   = require('express'),
    router    = express.Router(),
    mongoose  = require('mongoose'),
    Urldata   = require('../models/urldata');

router.get('/:short', function(req,res){
  Urldata.findOne({code:req.params.short}, function(err, found){
    if(err){
      console.log(err);
    }  else{
      if(!found){
      res.render('redirect',{url:" "});
    }else{
      res.render('redirect',{url:found.url});
    }

    }
  });
});

module.exports = router;
