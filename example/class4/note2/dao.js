var mysql = require('mysql');

//mysql://b5ecd12bd2d4fc:680a73ae@eu-cdbr-west-01.cleardb.com/heroku_241cdd1ffcca241?reconnect=true
var connection = mysql.createConnection({
    host    : 'eu-cdbr-west-01.cleardb.com',
    port    : 3306,
    user    : 'b5ecd12bd2d4fc',
    password : '680a73ae',
    database : 'heroku_241cdd1ffcca241'
});

exports.getNoteList = function(_callback) {
    connection.query('SELECT * FROM memo', function(err, rows){
        console.log(rows);
        //connected! (unless 'err' is set)

        _callback(rows);
    });
};

exports.writeNote = function(author, contents, _callback) {
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
            _callback(result);
        }
    });
};

exports.deleteNote = function(_id, _callback){

    var where = {"_id": _id};

    connection.query('DELETE FROM memo WHERE ?',
      where, function(err, result) {
            if(err){
                throw err;
            }else{
                _callback(result);
            }
        });
};

exports.modifyNote = function(_id, contents, _callback) {

    var updateContents = {"contents" : contents};
    var updateId = {"_id" : _id};

    var bindVar = [updateContents, updateId];

    connection.query('UPDATE memo SET ? WHERE ?', bindVar,function(err, result){
        if(err){
            throw err;
        }else{
            _callback(result);
        }
    });
};