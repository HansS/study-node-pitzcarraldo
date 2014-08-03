var express = require('express');
var path = require('path');
//favicon.ico파일의 경로가 지정되어 있지 않을 때 기본 경로를 지정해 줌
var favicon = require('static-favicon');
//Logger (Like Log4j)
var logger = require('morgan');
//HttpRequest에 담겨있는 Cookie 데이터를 Object로 파싱
var cookieParser = require('cookie-parser');
//HttpRequestBody가 XML, Json등의 형식으로 되어있을 때 Object로 파싱
var bodyParser = require('body-parser');
//유저가 만든 Library
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');


//express에서 사용할 미들웨어들을 세팅
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(function(req, res, next){
//	console.log('i am a middleware. ');
//	next();
//});


//Routing
//Express에 즉시 RequestMapping 선언
app.get('/', function(req, res) {
	res.render('index', { title: 'Express' });
});

//첫번째 파라메터에 Url Path를 넣으면 해당 경로에만 미들웨어를 세팅
app.use('/users', users);



/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
