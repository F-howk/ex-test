var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  setTimeout(()=>{
    res.render('index', { title: 'Express' });
  },2000)
});

module.exports = router;
