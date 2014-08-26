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


router.get('/setcookie/:name/:value', function(req, res) {
    res.cookie(req.params.name ,req.params.value);
    res.send('cookie set, name ' + req.params.name + ' : ' + req.params.value);
});

router.get('/req/:id', function(req, res) {
	var result = {};
	result.host = req.host;
	result.ip = req.ip;
    result['req'] = req.pathname;

//    result.req = req.pathname;
    result.path = req.path;
	result.paramsId = req.params.id;
	result.queryId = req.query.id;
	result.cookiesId = req.cookies.id;

    result.cookies = req.cookies;
	res.send(result);
});

router.get('/:id', function(req, res) {
  res.send(req.params.id);
});


module.exports = router;
