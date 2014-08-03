var express = require('express');
var router = express.Router();

/* GET users listing. */
//순서가 중요함. 먼저 선언된 것부터 우선으로 적용.
router.get('/', function(req, res) {
  res.send(req.query.id);
});

router.get('/redirect', function(req, res) {
	res.redirect('/');
	//res.redirect('back'); <-history.back
});

router.get('/cookie/:id', function(req, res) {
  res.cookie('id',req.params.id);
	res.send('cookie set, id : ' + req.params.id);
});

router.get('/req/:id', function(req, res) {
	var result = {};
	result.host = req.host;
	result.ip = req.ip;
	result.paramsId = req.params.id;
	result.queryId = req.query.id;
	result.cookiesId = req.cookies.id;
	res.send(result);
});

router.get('/:id', function(req, res) {
  res.send(req.params.id);
});


module.exports = router;
