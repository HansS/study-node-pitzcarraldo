var mysql = require('mysql');

//mysql://b5ecd12bd2d4fc:680a73ae@eu-cdbr-west-01.cleardb.com/heroku_241cdd1ffcca241?reconnect=true
var connection = mysql.createConnection({
    host    : 'eu-cdbr-west-01.cleardb.com',
    port    : 3306,
    user    : 'b5ecd12bd2d4fc',
    password : '680a73ae',
    database : 'heroku_241cdd1ffcca241'
});

exports.index = function(req, res){
    res.render('note/note', {title : 'exercise mysql'});
};

exports.load = function(req, res) {
    connection.query('SELECT * FROM memo', function(err, rows){
        console.log(rows);
        //connected! (unless 'err' is set)
        res.json(rows);
    });
};

exports.write = function(req, res) {
    var author = req.body.author;
    var contents = req.body.contents;
    var date = new Date();

    date = date.getUTCFullYear() + '-'
        + ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' + date.getUTCDate() + ' '
        + ('00' + date.getUTCHours()).slice(-2) + ':'
        + ('00' + date.getUTCMinutes()).slice(-2) + ':'
        + ('00' + date.getUTCSeconds()).slice(-2);

    var memo = {
        author : author,
        contents : contents,
        date : date
    }

    connection.query('INSERT INTO memo SET ?', memo, function(err, result){
        if(err){
            throw err;
        }else{
            res.json({status:"SUCCESS"});
        }
    });
};

exports.del = function(req, res){
    var _id = req.body._id;
    var where = {"_id": _id};

    connection.query('DELETE FROM memo WHERE ?',
      where, function(err, result) {
            if(err){
                throw err;
            }else{
                res.json({status: "SUCCESS"});
            }
        });
};

exports.modify = function(req, res) {
    var _id = req.body._id;
    var contents = req.body.contents;

    var updateContents = {"contents" : contents};
    var updateId = {"_id" : _id};

    var bindVar = [updateContents, updateId];

    connection.query('UPDATE memo SET ? WHERE ?', bindVar,function(err, result){
    //connection.query('UPDATE memo SET contents="' + contents + '" WHERE _id=' + _id, function(err, result){
        if(err){
            throw err;
        }else{
            res.json({status : "SUCCESS"});
        }
    });
};