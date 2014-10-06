var express = require('express');
var router = express.Router();

var dao = require('./dao');

var users = require('./user');


router.get('/', function(req, res) {
    res.render('note/note', {title : 'exercise mysql'});
});

/*
 * 조회
 */
router.get('/load', function(req, res) {

    console.log(req.user);
    dao.getNoteList(function(rows){
        res.json(rows);
    });
});

/*
 * 등록
 */
router.post('/write', function(req, res) {

    var author = req.body.author;
    var contents = req.body.contents;
    var ip_addr = req.ip;
    dao.writeNote(author, contents, ip_addr, function(result){
        res.json({status:"SUCCESS",msg:result});
    });
});

/*
 * 삭제
 */
router.post('/del', function(req, res) {
    var _id = req.body._id;
    var ip_addr = req.ip;
    dao.deleteNote(_id, ip_addr, function(result){
        res.json({status:"SUCCESS",msg:result});
    });
});

/*
 * 수정
 */
router.post('/modify', function(req, res) {
    var _id = req.body._id;
    var contents = req.body.contents;
    var ip_addr = req.ip;
    dao.modifyNote(_id, contents, ip_addr, function(result){
        res.json({status:"SUCCESS",msg:result});
    });
});

var passport = require('passport');

router.post('/login', passport.authenticate('local', { successRedirect: '/note',
    failureRedirect: '/note' }));

var  LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {

        var user = users.getUser(username);
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password != password) {
                return done(null, false, { message: 'Incorrect password.'});
            }
            return done(null, user);
    }
));

passport.serializeUser(function(user, done) {
    console.log('serializing user of ' + user);
    done(null, user.id);
});


passport.deserializeUser(function(id, done) {

    console.log('deserializing user of ' + id);
    var user = users.getUser(id);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }

});


router.post('/join', function(req, res) {
    var user = users.getUser(req.body.username);
    if (user) {
        alert('Already joined!');
    }
    users.registerUser(req.body.username, req.body.password);
});

module.exports = router;