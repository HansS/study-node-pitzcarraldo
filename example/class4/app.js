var express = require('express');

//util성 모듈..
var path = require('path');


//favicon.ico파일의 경로가 지정되어 있지 않을 때 기본 경로를 지정해 줌
var favicon = require('static-favicon');

//Logger (Like Log4j) for access log남기는용도.
var logger = require('morgan');

//HttpRequest에 담겨있는 Cookie 데이터를 Object로 파싱
var cookieParser = require('cookie-parser');

//HttpRequestBody가 XML, Json등의 형식으로 되어있을 때 Object로 파싱
var bodyParser = require('body-parser');

//유저가 만든 Library (spring 의 controller request mapping 역할.
var users = require('./routes/users');

//var note = require('./note/note');
var note = require('./note5/controller');


//express 초기화하고 instance를 app에 assignsn
var app = express();

// view engine setup
// "__dirname" 현재 파일이 존재하는 디렉터리 경로
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');


//express에서 사용할 미들웨어들을 세팅
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//Routing
//Express에 즉시 RequestMapping 선언
app.get('/', function(req, res) {
	res.render('index', { title: 'hello Express ' });
});



//첫번째 파라메터에 Url Path를 넣으면 해당 경로에만 미들웨어를 세팅
app.use('/users', users);
app.use('/note', note);

//app.use('/note/form', note.index);
//app.use('/note/load', note.load);
//app.use('/note/write', note.write);
//app.use('/note/modify', note.modify);
//app.use('/note/del', note.del);

var passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local', { successRedirect: '/note',
    failureRedirect: '/login' }));

var  LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.save({username : username, password:password});
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

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
