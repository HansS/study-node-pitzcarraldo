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

module.exports = router;