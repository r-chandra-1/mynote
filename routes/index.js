var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
    //res.redirect('/')
    res.sendfile('./public/views/index.html');
});

//Angular will handle the front-end routing

module.exports = router;
