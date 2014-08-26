var express = require('express');
var router = express.Router();

var dao = require('./dao');


router.get('/', function(req, res) {
    res.render('note/note', {title : 'exercise mysql'});
});

/*
 * 조회
 */
router.get('/load', function(req, res) {

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

    dao.writeNote(author, contents, function(result){
        res.json({status:"SUCCESS",msg:result});
    });
});

/*
 * 삭제
 */
router.post('/del', function(req, res) {
    var _id = req.body._id;
    dao.deleteNote(_id, function(result){
        res.json({status:"SUCCESS",msg:result});
    });
});

/*
 * 수정
 */
router.post('/modify', function(req, res) {
    var _id = req.body._id;
    var contents = req.body.contents;

    dao.modifyNote(_id, contents, function(result){
        res.json({status:"SUCCESS",msg:result});
    });
});

module.exports = router;